import { useState, useEffect } from "react";

import { useIsMobile } from "./use-is-mobile";

export function useHover(elementRef: React.RefObject<HTMLElement>) {
    const isMobile = useIsMobile();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isMobile) return;

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
    }, [elementRef, isMobile]);

    return isHovering;
}

export function useHoverAny(refs: React.RefObject<HTMLElement>[]) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return refs.map((r) => useHover(r)).some(Boolean);
}
