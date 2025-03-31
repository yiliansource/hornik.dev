"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function AchievementsSection() {
    const section = useRef<HTMLElement | null>(null);
    const isInView = useInView(section, { amount: 0.2, once: true });

    return (
        <motion.section
            id="achievements"
            className="flex flex-col gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            ref={section}
        >
            <h1 className="text-5xl font-semibold">Achievements</h1>
            <ul className="flex flex-col gap-2">
                {achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                ))}
            </ul>
        </motion.section>
    );
}

const achievements: string[] = [
    "Early Student Award of the Austrian Mathematical Society (ÖMG)",
    "#15 36th Classic Cloudflight Coding Contest",
    "#2 38th Classic Cloudflight Coding Contest",
    "#17 39th Classic Cloudflight Coding Contest",
];
