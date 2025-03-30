import { useIsMobile } from "@/lib/use-is-mobile";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

export function LightboxImage(props: React.HTMLProps<HTMLImageElement>) {
    const isMobile = useIsMobile();

    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [isImagePoppedOut, setImagePoppedOut] = useState(false);

    const srcImageRef = useRef<HTMLImageElement>(null);

    const handleLightboxOpen = () => {
        if (isMobile) return;

        setLightboxOpen(true);
        setImagePoppedOut(true);

        document.body.style.overflowY = "hidden";
    };
    const handleLightboxClose = () => {
        setLightboxOpen(false);

        document.body.style.overflowY = "unset";
    };

    let srcRect: DOMRect | null = null,
        dstRect: DOMRect | null = null;

    if (srcImageRef.current) {
        srcRect = srcImageRef.current!.getBoundingClientRect();

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const originalImageAspect = srcRect.width / srcRect.height;

        if (originalImageAspect > 1) {
            const desiredWidth = screenWidth * 0.75;
            const desiredHeight = desiredWidth / originalImageAspect;
            dstRect = DOMRect.fromRect({
                x: screenWidth / 2 - desiredWidth / 2,
                y: screenHeight / 2 - desiredHeight / 2,
                width: desiredWidth,
                height: desiredHeight,
            });
        } else {
            const desiredHeight = screenHeight * 0.9;
            const desiredWidth = desiredHeight * originalImageAspect;
            dstRect = DOMRect.fromRect({
                x: screenWidth / 2 - desiredWidth / 2,
                y: screenHeight / 2 - desiredHeight / 2,
                width: desiredWidth,
                height: desiredHeight,
            });
        }
    }

    return (
        <>
            <motion.div
                onClick={handleLightboxOpen}
                className={clsx(
                    "overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-900/40",
                    !isMobile && "cursor-pointer",
                )}
            >
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img {...props} ref={srcImageRef} style={{ opacity: isImagePoppedOut ? 0 : 1 }} />
            </motion.div>
            <AnimatePresence>
                {isLightboxOpen && srcRect && dstRect && (
                    <motion.div
                        className="fixed top-0 left-0 z-20 h-dvh w-dvw"
                        initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgb(0, 0, 0, 0)" }}
                        animate={{ backdropFilter: "blur(10px)", backgroundColor: "rgb(0, 0, 0, 0.5)" }}
                        exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgb(0, 0, 0, 0)" }}
                        transition={{ ease: "linear", duration: 0.4 }}
                        onClick={handleLightboxClose}
                    >
                        <motion.div
                            className="overflow-hidden rounded-lg"
                            variants={{
                                hidden: {
                                    x: srcRect.x,
                                    y: srcRect.y,
                                    width: srcRect.width,
                                    height: srcRect.height,
                                },
                                visible: {
                                    x: dstRect.x,
                                    y: dstRect.y,
                                    width: dstRect.width,
                                    height: dstRect.height,
                                },
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ ease: "easeInOut", duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                            onAnimationComplete={(def) => {
                                setImagePoppedOut(def === "visible");
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
