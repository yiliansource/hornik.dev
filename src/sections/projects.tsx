"use client";

import { Badge } from "@/components/ui/badge";
import { labelToColor } from "@/lib/badge-color-lookup";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";

type ProjectInfo = {
    title: string;
    description: React.ReactNode;
    homepage?: string;
    github?: string;
    tags?: string[];
};

const projects: ProjectInfo[] = [
    {
        title: "party.js",
        description: "A JavaScript library to brighten up your user's site experience with visual effects!",
        homepage: "https://party.js.org",
        github: "https://github.com/yiliansource/party-js",
        tags: ["TypeScript", "HTML"],
    },
    {
        title: "csp-solvers",
        description: "A collection of interactable solvers for constraint satisfaction problems!",
        homepage: "https://csp.hornik.dev/",
        github: "https://github.com/yiliansource/csp-solvers",
        tags: ["TypeScript", "Next.js"],
    },
    {
        title: "pdfgroup",
        description: "A web application to split and group a PDF document into multiple, smaller PDF documents.",
        homepage: "https://pdfgroup.vercel.app/",
        github: "https://github.com/yiliansource/pdfgroup",
        tags: ["TypeScript", "React.js"],
    },
    {
        title: "Tenacious Tanks",
        description:
            "A free-to-play, local-multiplayer, fast-paced arena brawler, where up to 4 players challenge each other in head-to-head tactical combat! This was my graduation project.",
        homepage: "https://yilian.itch.io/tenacious-tanks",
        tags: ["C#", "Unity3D", "Wwise"],
    },
    {
        title: "Quote of the Day",
        description: "A minimal website that displays a different inspirational quote every day.",
        homepage: "https://qotd.hornik.dev",
        github: "https://github.com/yiliansource/quote-of-the-day",
        tags: ["TypeScript", "React.js"],
    },
    {
        title: "Hex2048",
        description: "A hex-grid version of the game 2048.",
        homepage: "https://hex2048.hornik.dev",
        github: "https://github.com/yiliansource/hex2048",
        tags: ["TypeScript", "React.js"],
    },
];

export function ProjectsSection() {
    const section = useRef<HTMLElement | null>(null);
    const isInView = useInView(section, { amount: 0.2, once: true });

    return (
        <motion.section
            id="projects"
            className="flex flex-col gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            ref={section}
        >
            <h1
                className="top-8 text-5xl font-semibold"
                // style={{ textShadow: "0px 1px 2px #000, 0px 1px 4px #000, 0px 1px 8px #000" }}
            >
                Projects
            </h1>
            <div className={clsx("grid grid-cols-1 gap-6", "lg:grid-cols-2 lg:gap-8")}>
                {projects.map((p) => (
                    <ProjectItem key={p.title} data={p} />
                ))}
            </div>
        </motion.section>
    );
}

function ProjectItem({ data }: { data: ProjectInfo }) {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        if (!data.github) return;
        if (!("parse" in URL)) return;

        const githubUrl = URL.parse(data.github);
        if (!githubUrl) return;

        fetch("https://api.github.com/repos" + githubUrl?.pathname)
            .then((r) => r.json())
            .then((r) => {
                const stars = Number(r.stargazers_count);
                if (stars > 2) {
                    setStars(stars);
                }
            });
    }, [data.github]);

    return (
        <div>
            <div className="flex flex-row justify-between">
                <h3 className="mb-1 text-lg font-semibold">
                    {data.homepage ? (
                        <a className="hover:underline" href={data.homepage} target="_blank">
                            {data.title}
                        </a>
                    ) : (
                        data.title
                    )}
                </h3>
                <div className="flex flex-row items-center gap-4 select-none">
                    {typeof stars === "number" && (
                        <span className="text-foreground-muted flex flex-row items-center gap-1">
                            <FaStar className="text-sm text-yellow-400 dark:text-yellow-200" />
                            <span className="text-sm">{stars}</span>
                        </span>
                    )}
                    {data.github && (
                        <span className="text-foreground-muted hover:text-foreground text-lg transition-colors">
                            <a href={data.github} target="_blank">
                                <FaGithub />
                            </a>
                        </span>
                    )}
                </div>
            </div>
            <div className="text-foreground-muted prose prose-sm dark:prose-invert mb-2">{data.description}</div>
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
    );
}

// function interweave(nodes: React.ReactNode[], sepFactory: () => React.ReactNode) {
//     return nodes.filter(Boolean).reduce<React.ReactNode[]>((acc, node, i) => {
//         if (i > 0) acc.push(<React.Fragment key={`sep-${i}`}>{sepFactory()}</React.Fragment>);
//         acc.push(<React.Fragment key={`node-${i}`}>{node}</React.Fragment>);
//         return acc;
//     }, []);
// }
