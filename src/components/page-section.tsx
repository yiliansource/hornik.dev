import { motion, useInView, type HTMLMotionProps } from "motion/react";
import { useRef } from "react";

export function PageSection({
    id,
    title,
    children,
    ...props
}: HTMLMotionProps<"section"> & { id: string; title?: string }) {
    const section = useRef<HTMLElement | null>(null);
    const isInView = useInView(section, { amount: 0.2, once: true });

    return (
        <motion.section
            id={id}
            className="relative flex flex-col gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            ref={section}
            {...props}
        >
            <>
                {title && <h1 className="text-5xl font-semibold">{title}</h1>}
                {children}
            </>
        </motion.section>
    );
}
