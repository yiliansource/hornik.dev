import { BackToTop } from "@/components/back-to-top";
import { SectionList } from "@/components/section-list";
import { Sidebar } from "@/components/sidebar";
import clsx from "clsx";

export default function PortfolioSite() {
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
