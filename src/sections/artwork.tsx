"use client";

import { LightboxImage } from "@/components/lightbox-image";
import clsx from "clsx";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const images: {
    src: string;
    className?: string;
    alt?: string;
}[] = [
    {
        src: "/img/artworks/cherry-blossoms.jpg",
    },
    {
        src: "/img/artworks/dining-room.jpg",
    },
    {
        src: "/img/artworks/corridor.jpg",
        className: "row-span-2",
    },
    {
        src: "/img/artworks/temple.png",
    },
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
            <h1 className="mb-10 text-5xl font-semibold">Artwork</h1>
            <div className="grid gap-4 lg:grid-cols-2">
                {images.map((image) => (
                    <div key={image.src} className={clsx("", image.className)}>
                        <LightboxImage src={image.src} alt={image.alt} draggable={false} />
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
