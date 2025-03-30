"use client";

import { Badge } from "@/components/badge";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const projects: {
    title: string;
    description: React.ReactNode;
    homepage?: string;
    tags?: string[];
}[] = [
    {
        title: "party.js",
        description: "A JavaScript library to brighten up your user's site experience with visual effects!",
        homepage: "https://party.js.org",
        tags: ["TypeScript", "HTML"],
    },
    {
        title: "csp-solvers",
        description: "A collection of interactable solvers for constraint satisfaction problems!",
        tags: ["TypeScript", "Next.js"],
    },
    {
        title: "Tenacious Tanks",
        description:
            "A free-to-play, local-multiplayer, fast-paced arena brawler, where up to 4 players challenge each other in head-to-head tactical combat! This was my graduation project.",
        homepage: "https://tenacioustanks.com",
        tags: ["Unity3D", "C#", "Wwise"],
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
            <h1 className="text-5xl font-semibold">Projects</h1>
            <div className={clsx("grid grid-cols-1 gap-6", "lg:grid-cols-2 lg:gap-8")}>
                {projects.map((p) => (
                    <div key={p.title}>
                        <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
                        <div className="text-foreground-muted mb-2 text-sm">{p.description}</div>
                        {p.tags && (
                            <div className="mt-3 flex flex-row flex-wrap gap-1">
                                {/* TODO: Fun idea: differently colored badges for different technologies, and clicking a badge
                                "filters" them, i.e. reduces the opacity of non-filtered projects */}
                                {p.tags.map((t) => (
                                    <Badge key={t}>{t}</Badge>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* <FeaturedProject
                name="party.js"
                summary="A JavaScript library to brighten up your user's site experience with visual effects!"
                tags={["TypeScript", "HTML"]}
                bannerSrc={"/img/projects/partyjs.png"}
            >
                <LoremIpsum p={1} />
            </FeaturedProject>
            <FeaturedProject
                name="Tenacious Tanks"
                summary="A free-to-play, local-multiplayer, fast-paced arena brawler, where up to 4 players challenge each other in head-to-head tactical combat! This was my graduation project."
                tags={["Unity3D", "C#", "Wwise"]}
                bannerSrc={"/img/projects/tenacious-tanks.png"}
            >
                <LoremIpsum p={1} />
            </FeaturedProject> */}
        </motion.section>
    );
}
