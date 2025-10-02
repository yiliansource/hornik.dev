import { motion, useInView, type HTMLMotionProps } from "motion/react";
import { useRef, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function SectionHeading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h1 className={twMerge("mb-8 text-5xl font-semibold md:mb-10", className)} {...props} />;
}

export function RevealableSection({
    id,
    children,
    ...props
}: HTMLMotionProps<"section"> & { id: string; title?: string }) {
    const section = useRef<HTMLElement | null>(null);
    const isInView = useInView(section, { amount: 0.2, once: true });

    return (
        <motion.section
            id={id}
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            ref={section}
            {...props}
        >
            {children}
        </motion.section>
    );
}
