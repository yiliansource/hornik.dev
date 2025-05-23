"use client";

import { Badge } from "@/components/badge";
import { labelToColor } from "@/lib/badge-color-lookup";
import { useHoverAny } from "@/lib/hooks/use-hover";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import clsx from "clsx";
import { motion } from "motion/react";
import { useCallback, useRef } from "react";

const INACTIVE_OPACITY = 0.2;

export function EducationAndExperienceSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null!);
    const isMobile = useIsMobile();

    const experienceLabelRef = useRef<HTMLElement>(null!);
    const experienceTimelineRef = useRef<HTMLDivElement>(null!);
    const isHoveringExperience = useHoverAny([experienceLabelRef, experienceTimelineRef]);

    const educationLabelRef = useRef<HTMLElement>(null!);
    const educationTimelineRef = useRef<HTMLDivElement>(null!);
    const isHoveringEducation = useHoverAny([educationLabelRef, educationTimelineRef]);

    const isHoveringEither = isHoveringExperience || isHoveringEducation;

    const handleScrollContainerClick = useCallback(() => {
        // tapping on mobile devices should scroll to the opposite panel
        if (!isMobile) return;

        const w = scrollContainerRef.current.clientWidth;
        const targetScroll = scrollContainerRef.current.scrollLeft > w / 2 ? 0 : w;
        scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }, [isMobile]);

    return (
        <section id="education-and-experience" className="">
            <div
                className="flex snap-x snap-mandatory flex-row overflow-x-scroll lg:overflow-x-visible"
                ref={scrollContainerRef}
                onClick={handleScrollContainerClick}
            >
                <div className="relative shrink-0 basis-[300px] snap-center snap-always">
                    <div className="absolute z-20 flex h-60 max-w-full items-center justify-center">
                        <p className="flex flex-wrap text-5xl font-semibold select-none">
                            <motion.span
                                animate={{ opacity: isHoveringExperience ? INACTIVE_OPACITY : 1 }}
                                ref={educationLabelRef}
                            >
                                Education
                            </motion.span>
                            <motion.span
                                animate={{ opacity: isHoveringEither ? INACTIVE_OPACITY : 1 }}
                                className="text-foreground-muted mx-3 font-thin duration-500"
                            >
                                &
                            </motion.span>
                            <motion.span
                                animate={{ opacity: isHoveringEducation ? INACTIVE_OPACITY : 1 }}
                                ref={experienceLabelRef}
                            >
                                Experience
                            </motion.span>
                        </p>
                    </div>
                    <Timeline items={experience} flip ref={experienceTimelineRef} dim={isHoveringEducation} />
                </div>
                <div className="relative mx-7">
                    <div className="absolute left-1/2 h-8 w-px border-l border-dashed border-zinc-800"></div>
                    <div className="absolute left-1/2 h-full py-8">
                        <div className="h-full border-l border-zinc-800"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 h-8 w-px border-l border-dashed border-zinc-800"></div>

                    <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
                        <div className="bg-background absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500"></div>
                        <div className="text-foreground-muted absolute right-4 -translate-y-1/2 rounded-lg px-2 py-1 text-xs whitespace-nowrap ring-1 ring-neutral-800">
                            I am here!
                        </div>
                        <motion.div
                            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300 transition-colors duration-500 dark:bg-green-700"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 1, repeatDelay: 0.5 }}
                        ></motion.div>
                        <motion.div className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 transition-colors duration-500"></motion.div>
                    </div>
                </div>
                <div className="relative shrink-0 basis-[300px] snap-center snap-always pt-4">
                    <Timeline items={education} ref={educationTimelineRef} dim={isHoveringExperience} />
                </div>
            </div>
        </section>
    );
}

function Timeline({
    items,
    flip,
    ref,
    onClick,
    dim,
}: {
    items: TimelineItemData[];
    flip?: boolean;
    ref?: React.Ref<HTMLDivElement>;
    onClick?: () => void;
    dim?: boolean;
}) {
    return (
        <motion.div
            className="flex flex-col gap-4"
            ref={ref}
            onClick={onClick}
            animate={{ opacity: dim ? INACTIVE_OPACITY : 1 }}
        >
            {items.map((item) => (
                <TimelineItem key={item.title} data={item} flip={flip} />
            ))}
        </motion.div>
    );
}

function TimelineItem({ flip, data }: { flip?: boolean; data: TimelineItemData }) {
    return (
        <div key={data.title} className="relative flex flex-col py-2" style={{ marginTop: data.mt ?? 0 }}>
            <div
                className={clsx(
                    "text-foreground-silent flex flex-row gap-1 text-sm font-semibold transition-colors duration-500",
                    flip && "justify-end",
                )}
            >
                <span>{data.from}</span>
                {data.to && (
                    <>
                        <span>&mdash;</span>
                        <span>{data.to}</span>
                    </>
                )}
            </div>
            <div>
                <div className="relative">
                    <div
                        className={clsx(
                            "absolute top-1/2 -translate-y-1/2 border-6 border-t-transparent border-b-transparent",
                            flip
                                ? "right-[-28px] border-l-0 border-r-zinc-800"
                                : "left-[-27px] border-r-0 border-l-zinc-800",
                        )}
                    ></div>
                    <p className={clsx("mb-2 font-semibold", flip && "text-right")}>{data.title}</p>
                </div>
                <div className={clsx("text-foreground-muted text-sm", flip && "text-right")}>{data.content}</div>
                {data.tags && (
                    <div className={clsx("mt-3 flex flex-row flex-wrap gap-1", flip && "justify-end")}>
                        {data.tags.map((t) => (
                            <Badge key={t} color={labelToColor(t)}>
                                {t}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

interface TimelineItemData {
    from: string;
    to?: string;
    mt?: number;
    title: string;
    content: React.ReactNode;
    tags?: string[];
}

const experience: TimelineItemData[] = [
    {
        mt: 240,
        from: "JUL 2023",
        to: "SEP 2023",
        title: "Software Engineer Intern — Cloudflight",
        content: (
            <>
                <p>
                    Working on the <span className="italic">HappyFotoDesigner</span> project allowed me to gain deep
                    insight into the workings of a large-scale Angular project, through the autonomous creation of new
                    components and features, as well as the creation of unit tests.
                </p>
            </>
        ),
        tags: ["Angular", "TypeScript", "Docker"],
    },
    {
        mt: 20,
        from: "OCT 2020",
        to: "JUN 2021",
        title: "Civil Servant  — DaVinciLab",
        content: (
            <>
                <p>
                    In the capacity of a junior software engineer, through prototypes I realised various learning
                    platform concepts, which serve programming courses aimed at young students.
                </p>
            </>
        ),
        tags: ["WordPress", "PHP"],
    },
    {
        from: "2019",
        title: "Technical Artist — Molekül",
        content: (
            <>
                <p>
                    <span className="italic">Molekül</span> is a conglomerate of like-minded creative individuals, that
                    want to collaboratively realise innovative ideas.
                </p>
            </>
        ),
    },
];

const education: TimelineItemData[] = [
    {
        mt: 20,
        from: "2024",
        to: "present",
        title: "Masters Degree — Technical University of Vienna",
        content: (
            <>
                <p className="mb-1">
                    My chosen specialization includes analysis and geometry. Once again, I have been a tutor for the
                    following exercise classes:
                </p>
                <ul>
                    <li>Analysis III (2024W)</li>
                    <li>Functional Analysis (2025S)</li>
                </ul>
            </>
        ),
    },
    {
        mt: 10,
        from: "2021",
        to: "2024",
        title: "Bachelors Degree — Technical University of Vienna",
        content: (
            <>
                <p className="mb-1">
                    Our programme covered the essentials in analysis, algebra and measure theory, before diving into
                    deeper areas like functional analysis, which took my interest.
                </p>
                <p className="mb-1">
                    Over the last semesters I worked as a student employee, acting as a tutor for the following exercise
                    classes:
                </p>
                <ul className="">
                    <li>Introduction to Programming (2022W)</li>
                    <li>Computermathematics (2023S)</li>
                    <li>Analysis III (2023W)</li>
                </ul>
            </>
        ),
    },
    {
        mt: 60,
        from: "2015",
        to: "2020",
        title: "HTL Spengergasse",
        content: (
            <>
                <p className="mb-1">
                    As my secondary education, I pursued media and game design here. We learned the theory of game
                    development, as well as operating the technologies that come with it, including Unity3D, Wwise, the
                    Adobe suite and Visual Studio.
                </p>
            </>
        ),
    },
];
