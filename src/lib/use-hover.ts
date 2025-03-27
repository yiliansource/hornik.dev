import { useState, useEffect } from "react";

export function useHover(elementRef: React.RefObject<HTMLElement>) {
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 640) {
            // disable hover effects on mobile
            setIsHovering(false);
            return;
        }

        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        const node = elementRef.current;
        if (node) {
            node.addEventListener("mouseenter", handleMouseOver);
            node.addEventListener("mouseleave", handleMouseOut);

            return () => {
                node.removeEventListener("mouseenter", handleMouseOver);
                node.removeEventListener("mouseleave", handleMouseOut);
            };
        }
    }, [elementRef]);

    return isHovering;
}
