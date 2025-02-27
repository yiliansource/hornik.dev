"use client";

import { MouseParallax } from "@/mouse-parallax";
import Image from "next/image";

import PortraitImage from "@/assets/img/me.png";

export default function Home() {
    return (
        <div className="px-4 font-[family-name:var(--font-geist-sans)]">
            <div className="relative flex flex-row py-32 items-center select-none">
                <div className="font-[family-name:var(--font-bitter)] basis-[550px]">
                    <MouseParallax factor={-1 / 80}>
                        <p className="mb-6 text-[80px] leading-[1.0] text-stroke-thick">
                            Hi, my
                            <br /> name is <b>Ian</b>
                            <span className="text-[#73bbc5]">.</span>
                        </p>
                        <p className="mb-3 text-[24px] leading-[1.6] text-stroke-thin b-2">
                            I&apos;m a <b>math student / web developer</b> from Vienna, Austria.
                        </p>
                    </MouseParallax>
                </div>
                <div className="hidden md:block ml-auto mr-[100px] mb-[-20px]">
                    <MouseParallax factor={-1 / 80}>
                        <Image
                            src={PortraitImage}
                            alt="Me!"
                            width={500}
                            height={500}
                            quality={100}
                            draggable={false}
                            priority
                        />
                    </MouseParallax>
                </div>
                <div className="absolute w-[700px] h-[150px] -z-10 bottom-[130px] right-0 -translate-y-1/2">
                    <MouseParallax factor={1 / 120}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <defs>
                                <pattern
                                    id="striped"
                                    x={0}
                                    y={0}
                                    width={22.93}
                                    height={22.93}
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="scale(0.75)"
                                >
                                    <polygon fill="#aadcec" points="0 8.18 14.75 22.93 22.74 22.93 0 0.19 0 8.18" />
                                    <polygon fill="#aadcec" points="22.93 8.37 22.93 0.38 22.56 0 14.56 0 22.93 8.37" />
                                </pattern>
                            </defs>
                            <rect fill="url(#striped)" width="100%" height="100%"></rect>
                        </svg>
                    </MouseParallax>
                </div>
            </div>
        </div>
    );
}
