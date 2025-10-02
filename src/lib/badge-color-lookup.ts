import { type BadgeProps } from "@/components/ui/badge";

const BADGE_COLOR_LOOKUP: Record<Lowercase<string>, BadgeProps["color"]> = {
    html: "red",
    typescript: "blue",
    angular: "red",
    docker: "blue",
    wordpress: "cyan",
    php: "purple",
    "next.js": "yellow",
    "react.js": "cyan",
    "c#": "purple",
    wwise: "blue",
    unity3d: "gray",
};

export function labelToColor(label: string) {
    return BADGE_COLOR_LOOKUP[label.toLowerCase() as Lowercase<string>];
}
