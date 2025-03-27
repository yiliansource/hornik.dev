"use client";

import { Badge } from "@/components/badge";
import { useHover } from "@/lib/use-hover";
import { motion } from "motion/react";
import { useRef } from "react";
import { loremIpsum } from "react-lorem-ipsum";

export function ExperienceSection() {
    const experienceLabelRef = useRef<HTMLElement>(null!);
    const experienceTimelineRef = useRef<HTMLDivElement>(null!);

    const isHoveringExperienceLabel = useHover(experienceLabelRef);
    const isHoveringExperienceTimeline = useHover(experienceTimelineRef);
    const isHoveringExperience = isHoveringExperienceLabel || isHoveringExperienceTimeline;

    const educationLabelRef = useRef<HTMLElement>(null!);
    const educationTimelineRef = useRef<HTMLDivElement>(null!);

    const isHoveringEducationLabel = useHover(educationLabelRef);
    const isHoveringEducationTimeline = useHover(educationTimelineRef);
    const isHoveringEducation = isHoveringEducationLabel || isHoveringEducationTimeline;

    const INACTIVE_OPACITY = 0.2;

    return (
        <section id="education-and-experience" className="max-w-[calc(100vw-12px*2)]">
            <div className="flex snap-x snap-mandatory flex-row overflow-x-auto">
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
                                animate={{
                                    opacity: isHoveringEducation || isHoveringExperience ? INACTIVE_OPACITY : 1,
                                }}
                                className="mx-3 font-thin"
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
                    <motion.div
                        className="flex flex-col gap-8"
                        ref={experienceTimelineRef}
                        animate={{ opacity: isHoveringEducation ? INACTIVE_OPACITY : 1 }}
                    >
                        {experience.map((t) => (
                            <div
                                key={t.title}
                                className="relative flex flex-col py-2"
                                style={{ marginTop: t.mt ? t.mt : 0 }}
                            >
                                <div className="flex flex-row justify-end gap-1 text-sm font-semibold text-zinc-600">
                                    <span>{t.from}</span>
                                    {t.to && (
                                        <>
                                            <span>&mdash;</span>
                                            <span>{t.to}</span>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <div className="relative">
                                        <div className="absolute top-1/2 right-[-25px] -translate-y-1/2 border-8 border-l-0 border-t-transparent border-r-zinc-800 border-b-transparent"></div>
                                        <p className="mb-2 text-right font-semibold">{t.title}</p>
                                    </div>
                                    <div className="mb-2 text-right text-sm text-zinc-400">{t.content}</div>
                                    {t.tags && (
                                        <div className="flex flex-row flex-wrap justify-end gap-1">
                                            {t.tags.map((t) => (
                                                <Badge key={t}>{t}</Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="relative mx-6">
                    <div className="absolute left-1/2 h-8 w-px border-l border-dashed border-zinc-800"></div>
                    <div className="absolute left-1/2 h-full py-8">
                        <div className="h-full border-l border-zinc-800"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 h-8 w-px border-l border-dashed border-zinc-800"></div>
                </div>
                <div className="relative shrink-0 basis-[300px] snap-center snap-always pt-4">
                    <motion.div
                        className="flex flex-col gap-8"
                        ref={educationTimelineRef}
                        animate={{ opacity: isHoveringExperience ? INACTIVE_OPACITY : 1 }}
                    >
                        {education.map((t) => (
                            <div
                                key={t.title}
                                className="relative flex flex-col py-2"
                                style={{ marginTop: t.mt ? t.mt : 0 }}
                            >
                                <div className="flex flex-row gap-1 text-sm font-semibold text-zinc-600">
                                    <span>{t.from}</span>
                                    {t.to && (
                                        <>
                                            <span>&mdash;</span>
                                            <span>{t.to}</span>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <div className="relative">
                                        <div className="absolute top-1/2 left-[-24px] -translate-y-1/2 border-8 border-r-0 border-t-transparent border-b-transparent border-l-zinc-800"></div>
                                        <p className="mb-2 font-semibold">{t.title}</p>
                                    </div>
                                    <div className="mb-4 text-sm text-zinc-400">{t.content}</div>
                                    {t.tags && (
                                        <div className="flex flex-row gap-1">
                                            {t.tags.map((t) => (
                                                <Badge key={t}>{t}</Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

interface TimelineItem {
    from: string;
    to?: string;
    mt?: number;
    title: string;
    content: React.ReactNode;
    tags?: string[];
}

const experience: TimelineItem[] = [
    {
        mt: 320,
        from: "JUL 2023",
        to: "SEP 2023",
        title: "Software Engineer Intern @ Cloudflight",
        content: (
            <>
                <p>
                    Working on the <span className="italic">HappyFotoDesigner</span> project allowed me to gain deep
                    insight into the workings of a large-scale Angular project, through the creation of new components
                    and features, together with the addition of unit tests.
                </p>
            </>
        ),
        tags: ["Angular", "TypeScript", "Docker"],
    },
    {
        from: "OCT 2020",
        to: "JUN 2021",
        title: "Civil Servant  @ DaVinciLab",
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
        title: "Technical Artist @ Molekül",
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

const education: TimelineItem[] = [
    {
        from: "2024",
        to: "present",
        title: "Masters degree @ Technical University of Vienna",
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
        title: "Bachelors degree @ Technical University of Vienna",
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
