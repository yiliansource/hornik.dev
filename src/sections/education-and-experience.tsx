"use client";

import { Badge } from "@/components/badge";
import { useHoverAny } from "@/lib/use-hover";
import { useIsMobile } from "@/lib/use-is-mobile";
import clsx from "clsx";
import { motion } from "motion/react";
import { useCallback, useRef } from "react";
import { loremIpsum } from "react-lorem-ipsum";

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
                    <div className="absolute z-20 flex h-80 max-w-full items-center justify-center">
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
                <div className="relative mx-6">
                    <div className="absolute left-1/2 h-8 w-px border-l border-dashed border-zinc-800"></div>
                    <div className="absolute left-1/2 h-full py-8">
                        <div className="h-full border-l border-zinc-800"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 h-8 w-px border-l border-dashed border-zinc-800"></div>
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
            className="flex flex-col gap-8"
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

// function ExperienceTimeline({ items, ref }: { items: TimelineItemData[]; ref: React.Ref<HTMLDivElement> }) {
//     return (
//         <motion.div
//             className="flex flex-col gap-8"
//             ref={ref}
//             onClick={() => isMobile && scrollContainerRef.current.scrollTo({ left: 300 + 24, behavior: "smooth" })}
//             animate={{ opacity: isHoveringEducation ? INACTIVE_OPACITY : 1 }}
//         ></motion.div>
//     );
// }

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
                            "absolute top-1/2 -translate-y-1/2 border-8 border-t-transparent border-b-transparent",
                            flip
                                ? "right-[-25px] border-l-0 border-r-zinc-800"
                                : "left-[-24px] border-r-0 border-l-zinc-800",
                        )}
                    ></div>
                    <p className={clsx("mb-2 font-semibold", flip && "text-right")}>{data.title}</p>
                </div>
                <div className={clsx("text-foreground-muted text-sm", flip && "text-right")}>{data.content}</div>
                {data.tags && (
                    <div className={clsx("mt-3 flex flex-row flex-wrap justify-end gap-1", flip && "justify-end")}>
                        {data.tags.map((t) => (
                            <Badge key={t}>{t}</Badge>
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
        mt: 320,
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
        from: "2024",
        to: "present",
        title: "Masters Degree — Technical University of Vienna",
        content: (
            <>
                <p className="mb-1">{loremIpsum({ p: 1, avgSentencesPerParagraph: 3, random: false })}</p>
                <ul>
                    <li>Analysis III (2024W)</li>
                    <li>Functional Analysis (2025S)</li>
                </ul>
            </>
        ),
    },
    {
        from: "2021",
        to: "2024",
        title: "Bachelors Degree — Technical University of Vienna",
        content: (
            <>
                <p className="mb-1">{loremIpsum({ p: 1, avgSentencesPerParagraph: 4, random: false })}</p>
                <ul className="">
                    <li>Introduction to Programming (2022W)</li>
                    <li>Computermathematics (2023S)</li>
                    <li>Analysis III (2023W)</li>
                </ul>
            </>
        ),
    },
    {
        mt: 80,
        from: "2015",
        to: "2020",
        title: "HTL Spengergasse",
        content: (
            <>
                <p className="mb-1">{loremIpsum({ p: 1, avgSentencesPerParagraph: 3, random: false })}</p>
            </>
        ),
    },
];
