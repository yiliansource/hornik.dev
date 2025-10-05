import { BackToTop } from "@/components/back-to-top";
import { Sidebar } from "@/components/sidebar";
import clsx from "clsx";
import { useEffect } from "react";

import { applyTransitions } from "./lib/theme";
import { SectionList } from "./sections";

export default function PortfolioSite() {
    useEffect(() => {
        applyTransitions(true);
    }, []);

    return (
        <div className={clsx("mx-auto grid max-w-7xl grid-cols-1 px-3", "lg:grid-cols-[1fr_1.5fr] lg:gap-[20px]")}>
            <BackToTop />

            <Sidebar />
            <main className={clsx("flex grow flex-col pb-24", "lg:pb-40", "*:pt-16 *:pb-8 [&>*:first-child]:pt-24")}>
                <SectionList />
            </main>
        </div>
    );
}
