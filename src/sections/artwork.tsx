"use client";

import { SectionHeading } from "@/components/sections";
import { LightboxImage } from "@/components/ui/lightbox-image";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const imageColumns: {
    src: string;
    className?: string;
    alt?: string;
    title?: string;
    description?: React.ReactNode;
}[][] = [
    [
        {
            src: "/img/artworks/cherry-blossoms.jpg",
        },

        {
            src: "/img/artworks/corridor.jpg",
        },
    ],
    [
        {
            src: "/img/artworks/dining-room.jpg",
        },
        {
            src: "/img/artworks/temple.png",
        },
        {
            src: "/img/artworks/in-reactio-veritas.jpg",
            title: "In Reactio Veritas",
            description: (
                <>
                    <p>This image was generated using brain wave data from two individuals engaged in a discussion.</p>
                </>
            ),
        },
    ],
];

export function ArtworksSection() {
    const section = useRef<HTMLElement | null>(null);
    const isInView = useInView(section, { amount: 0.2, once: true });

    return (
        <motion.section
            id="artwork"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            ref={section}
        >
            <SectionHeading>Artwork</SectionHeading>
            <div className="grid gap-4 lg:grid-cols-2">
                {imageColumns.map((col, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        {col.map((img) => (
                            <div key={img.src} className={clsx("", img.className)}>
                                <LightboxImage
                                    src={img.src}
                                    alt={img.alt}
                                    draggable={false}
                                    title={img.title}
                                    description={img.description}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
