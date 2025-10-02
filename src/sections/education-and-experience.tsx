"use client";

import { RevealableSection } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { labelToColor } from "@/lib/badge-color-lookup";
import Markdown from "react-markdown";

export function EducationAndExperienceSection() {
    return (
        <>
            <section id="education">
                <h1 className="mb-6 text-5xl font-semibold">Education</h1>
                <TimelineGrid items={education} />
            </section>
            <RevealableSection id="experience">
                <h1 className="mb-6 text-5xl font-semibold">Experience</h1>
                <TimelineGrid items={experience} />
            </RevealableSection>
        </>
    );
}

function TimelineGrid({ items }: { items: TimelineItemData[] }) {
    return (
        <div className="grid gap-x-6 gap-y-2 md:grid-cols-2 md:gap-y-4">
            {items.map((item) => (
                <TimelineItem key={item.title} data={item} />
            ))}
        </div>
    );
}

function TimelineItem({ data }: { data: TimelineItemData }) {
    return (
        <div key={data.title} className="relative flex flex-col py-2">
            <div className="text-foreground-silent flex flex-row gap-1 text-sm font-semibold transition-colors duration-500">
                <span>{data.from}</span>
                {data.to && (
                    <>
                        <span>&mdash;</span>
                        <span>{data.to}</span>
                    </>
                )}
            </div>
            <div>
                <p className="mb-3 font-semibold">{data.title}</p>
                <div className="prose dark:prose-invert text-foreground-muted prose-sm [&>*]:my-2">
                    <Markdown>{data.content}</Markdown>
                </div>
                {data.tags && (
                    <div className="mt-3 flex flex-row flex-wrap gap-1">
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
    content: string;
    tags?: string[];
}

const experience: TimelineItemData[] = [
    {
        from: "JUL 2023",
        to: "SEP 2023",
        title: "Software Engineer Intern — Cloudflight",
        content: `Working on the *HappyFotoDesigner* project allowed me to gain deep 
insight into the workings of a large-scale Angular project, through the autonomous creation of new 
components and features, as well as the creation of unit tests.`,
        tags: ["Angular", "TypeScript", "Docker"],
    },
    {
        from: "OCT 2020",
        to: "JUN 2021",
        title: "Civil Servant  — DaVinciLab",
        content: `In the capacity of a junior software engineer, through prototypes I realised various learning 
platform concepts, which serve programming courses aimed at young students.`,
        tags: ["WordPress", "PHP"],
    },
    {
        from: "2019",
        title: "Technical Artist — Molekül",
        content: `*Molekül* is a conglomerate of like-minded creative individuals, that
want to collaboratively realise innovative ideas.`,
    },
];

const education: TimelineItemData[] = [
    {
        from: "2024",
        to: "present",
        title: "Masters Degree — Technical University of Vienna",
        content: `My chosen specialization includes *analysis and geometry*. Once again, I have been a tutor for the
following exercise classes:

- Analysis III (2024W)
- Functional Analysis (2025S)
- Analysis I (2025W)

Additionally, starting from July 2025 I have been *student representative* for the student faculty for 
mathematics, while continuing to sit on the study commission.`,
    },
    {
        from: "2021",
        to: "2024",
        title: "Bachelors Degree — Technical University of Vienna",
        content: `Our programme covered the essentials in analysis, algebra and measure theory, before diving into
deeper areas like functional analysis, which took my interest.

Over the last semesters I worked as a student employee, acting as a tutor for the following exercise classes:

- Introduction to Programming (2022W)
- Computermathematics (2023S)
- Analysis III (2023W)`,
    },
    {
        from: "2015",
        to: "2020",
        title: "HTL Spengergasse",
        content: `As my secondary education, I pursued *media and game design* here. We learned the theory of game 
development, as well as operating the technologies that come with it, including Unity3D, Wwise, the
Adobe suite and Visual Studio.`,
    },
];
