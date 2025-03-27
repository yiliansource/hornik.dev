"use client";

import clsx from "clsx";

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

/* eslint-disable @next/next/no-img-element */
export function ArtworksSection() {
    return (
        <section id="artwork">
            <h1 className="mb-10 text-5xl font-semibold">Artwork</h1>
            <div className="grid gap-4 lg:grid-cols-2">
                {images.map((image) => (
                    <div key={image.src} className={clsx("cursor-pointer overflow-hidden rounded-lg", image.className)}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            draggable={false}
                            onClick={() => {
                                window.open(image.src, "_blank");
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
