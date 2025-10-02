"use client";

import { Badge } from "@/components/ui/badge";
import { labelToColor } from "@/lib/badge-color-lookup";
import clsx from "clsx";

export function EducationAndExperienceSection() {
    return (
        <>
            <section id="education">
                <h1 className="mb-6 text-5xl font-semibold">Education</h1>
                <TimelineGrid items={education} />
            </section>
            <section id="experience">
                <h1 className="mb-6 text-5xl font-semibold">Experience</h1>
                <TimelineGrid items={experience} />
            </section>
        </>
    );
}

function TimelineGrid({ items }: { items: TimelineItemData[] }) {
    return (
        <div className="grid gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-4">
            {items.map((item) => (
                <TimelineItem key={item.title} data={item} flip={false} />
            ))}
        </div>
    );
}

function TimelineItem({ flip, data }: { flip?: boolean; data: TimelineItemData }) {
    return (
        <div key={data.title} className="relative flex flex-col py-2">
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
    title: string;
    content: React.ReactNode;
    tags?: string[];
}

const experience: TimelineItemData[] = [
    {
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
                <p className="mb-1">
                    My chosen specialization includes analysis and geometry. Once again, I have been a tutor for the
                    following exercise classes:
                </p>
                <ul className="mb-2">
                    <li>Analysis III (2024W)</li>
                    <li>Functional Analysis (2025S)</li>
                    <li>Analysis I (2025W)</li>
                </ul>
                <p className="mb-1">
                    Additionally, starting from July 2025 I have been student representative for the student faculty for
                    mathematics, while continuing to sit on the study commission.
                </p>
            </>
        ),
    },
    {
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
                <ul className="mb-2">
                    <li>Introduction to Programming (2022W)</li>
                    <li>Computermathematics (2023S)</li>
                    <li>Analysis III (2023W)</li>
                </ul>
            </>
        ),
    },
    {
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
