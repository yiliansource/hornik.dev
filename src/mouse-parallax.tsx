import { isTouchDevice } from "./device";
import { useIsClient } from "./use-is-client";
import { useMousePosition } from "./use-mouse-position";
import { motion } from "motion/react";

interface MouseParallaxProps {
    factor?: number;
}

export function MouseParallax({ factor = -1 / 100, children }: React.PropsWithChildren<MouseParallaxProps>) {
    const mousePosition = useMousePosition();
    const isClient = useIsClient();

    // disable parallax on ssr and mobile (touch) devices
    // TODO: this creates an error with hydration -- probably better to only lazily render on client
    if (typeof window === "undefined" || !isClient || isTouchDevice()) return children;

    const relX = (mousePosition.x ?? 0) - (window?.innerWidth ?? 0) / 2;
    const relY = (mousePosition.y ?? 0) - (window?.innerHeight ?? 0) / 2;

    const offsetX = relX * factor;
    const offsetY = relY * factor;

    return (
        <motion.div
            animate={{ x: offsetX, y: offsetY }}
            transition={{ duration: 0.2, type: "tween" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
