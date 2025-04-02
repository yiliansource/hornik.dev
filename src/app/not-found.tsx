import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ian Hornik | Not Found",
};

export default function NotFound() {
    return (
        <div className="flex h-dvh w-dvw select-none">
            <div className="m-auto text-center">
                <h1 className="mb-4 text-8xl leading-none font-semibold">404</h1>
                <p className="">I don&apos;t think you meant to go here.</p>
                <p>
                    Take a look at my{" "}
                    <em>
                        <Link className="font-bold" href="/">
                            portfolio
                        </Link>{" "}
                    </em>
                    instead!
                </p>
            </div>
        </div>
    );
}
