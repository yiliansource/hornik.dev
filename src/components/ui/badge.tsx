import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
    base: "rounded-lg px-3 py-1 text-xs select-none",
    variants: {
        color: {
            gray: "bg-gray-600/20 text-gray-600 dark:bg-gray-400/20 dark:text-gray-400",
            red: "bg-red-600/20 text-red-600 dark:bg-red-400/20 dark:text-red-400",
            yellow: "bg-yellow-600/20 text-yellow-600 dark:bg-yellow-200/20 dark:text-yellow-300",
            green: "bg-green-600/20 text-green-600 dark:bg-green-400/20 dark:text-green-400",
            blue: "bg-blue-600/20 text-blue-600 dark:bg-blue-400/20 dark:text-blue-400",
            purple: "bg-purple-600/20 text-purple-600 dark:bg-purple-400/20 dark:text-purple-400",
            pink: "bg-pink-600/20 text-pink-600 dark:bg-pink-400/20 dark:text-pink-400",
            cyan: "bg-cyan-600/20 text-cyan-600 dark:bg-cyan-400/20 dark:text-cyan-400",
        },
    },
    defaultVariants: {
        color: "gray",
    },
});

type BadgeVariants = VariantProps<typeof badge>;
export type BadgeProps = BadgeVariants &
    React.PropsWithChildren & {
        autoColor?: boolean;
    };

const allColors = ["gray", "red", "yellow", "green", "blue", "purple", "pink", "cyan"];

export function Badge({ children, color, autoColor }: BadgeProps) {
    if (autoColor) {
        const hash = simpleHash(JSON.stringify(children));
        color = allColors[hash % allColors.length] as BadgeProps["color"];
    }

    return <span className={badge({ color })}>{children}</span>;
}

function simpleHash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32-bit integer
    }
    return hash;
}
