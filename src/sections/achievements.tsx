import { RevealableSection, SectionHeading } from "@/components/sections";
import { BsTrophyFill } from "react-icons/bs";
import { TbLaurelWreathFilled } from "react-icons/tb";

export function AchievementsSection() {
    return (
        <RevealableSection id="achievements">
            <SectionHeading>Achievements</SectionHeading>
            <div className="absolute top-6 -left-16 -z-10 text-[300px] text-green-600 opacity-20 transition-opacity dark:opacity-10">
                <TbLaurelWreathFilled />
            </div>
            <div className="flex flex-col gap-2 pl-7">
                {achievements.map((ach, i) => (
                    <div className="relative" key={i}>
                        <span
                            className="absolute top-1/2 -left-3 -translate-x-full -translate-y-1/2 text-yellow-500"
                            // style={{ filter: "drop-shadow(0 2px 4px #353521)" }}
                        >
                            <BsTrophyFill />
                        </span>
                        <span>{ach}</span>
                    </div>
                ))}
            </div>
        </RevealableSection>
    );
}

const achievements: React.ReactNode[] = [
    "Early Student Award of the Austrian Mathematical Society (ÖMG)",
    <>
        #15 @ 36<sup>th</sup> Classic Cloudflight Coding Contest
    </>,
    <>
        #2 @ 38<sup>th</sup> Classic Cloudflight Coding Contest
    </>,
    <>
        #7 @ 39<sup>th</sup> Classic Cloudflight Coding Contest
    </>,
];
