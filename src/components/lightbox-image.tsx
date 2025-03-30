import { useIsMobile } from "@/lib/use-is-mobile";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function LightboxImage(props: React.HTMLProps<HTMLImageElement>) {
    const isMobile = useIsMobile();

    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [isImagePoppedOut, setImagePoppedOut] = useState(false);

    const [srcRect, setSrcRect] = useState<DOMRect | null>(null);
    const [dstRect, setDstRect] = useState<DOMRect | null>(null);

    const handleLightboxOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile) return;

        setLightboxOpen(true);
        setImagePoppedOut(true);

        const originalImageRect = e.currentTarget.getBoundingClientRect();
        setSrcRect(originalImageRect);

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const originalImageAspect = originalImageRect.width / originalImageRect.height;

        if (originalImageAspect > 1) {
            const desiredWidth = screenWidth * 0.75;
            const desiredHeight = desiredWidth / originalImageAspect;
            setDstRect(
                DOMRect.fromRect({
                    x: screenWidth / 2 - desiredWidth / 2,
                    y: screenHeight / 2 - desiredHeight / 2,
                    width: desiredWidth,
                    height: desiredHeight,
                }),
            );
        } else {
            const desiredHeight = screenHeight * 0.9;
            const desiredWidth = desiredHeight * originalImageAspect;
            setDstRect(
                DOMRect.fromRect({
                    x: screenWidth / 2 - desiredWidth / 2,
                    y: screenHeight / 2 - desiredHeight / 2,
                    width: desiredWidth,
                    height: desiredHeight,
                }),
            );
        }

        document.body.style.overflowY = "hidden";
    };
    const handleLightboxClose = () => {
        setLightboxOpen(false);

        document.body.style.overflowY = "unset";
    };

    return (
        <>
            <div
                onClick={handleLightboxOpen}
                className={clsx(
                    "overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-900",
                    !isMobile && "cursor-pointer",
                )}
            >
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img {...props} style={{ opacity: isImagePoppedOut ? 0 : 1 }} />
            </div>
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        className="fixed top-0 left-0 z-20 h-dvh w-dvw"
                        initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgb(0, 0, 0, 0)" }}
                        animate={{ backdropFilter: "blur(6px)", backgroundColor: "rgb(0, 0, 0, 0.5)" }}
                        exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgb(0, 0, 0, 0)" }}
                        transition={{ ease: "linear", duration: 0.1 }}
                        onClick={handleLightboxClose}
                    >
                        <motion.div
                            className="overflow-hidden rounded-lg"
                            variants={{
                                hidden: {
                                    x: srcRect!.x,
                                    y: srcRect!.y,
                                    width: srcRect!.width,
                                    height: srcRect!.height,
                                },
                                visible: {
                                    x: dstRect!.x,
                                    y: dstRect!.y,
                                    width: dstRect!.width,
                                    height: dstRect!.height,
                                },
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ ease: "linear", duration: 0.1 }}
                            onClick={(e) => e.stopPropagation()}
                            onAnimationComplete={(def) => {
                                if (def === "hidden") {
                                    console.log("pop false  ");
                                    setImagePoppedOut(false);
                                }
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                            <img {...props} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
