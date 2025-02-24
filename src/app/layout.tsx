import type { Metadata } from "next";
import { Bitter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const bitter = Bitter({
    variable: "--font-bitter",
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Home - Ian Hornik",
    description: "My portfolio site.",
};

// const navigation: { name: string; href: string }[] = [
//     {
//         name: "Home",
//         href: "/",
//     },
//     {
//         name: "Projects",
//         href: "/projects",
//     },
// ];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    bitter.variable,
                    geistSans.variable,
                    geistMono.variable,
                    "antialiased",
                    "flex flex-col min-h-screen",
                )}
            >
                <header className="h-[64px] flex flex-row items-center mx-auto w-full max-w-6xl">
                    <div></div>
                    <div className="ml-auto mr-0">
                        {/* <nav className="font-[family-name:var(--font-bitter)]">
                            <ul className="flex flex-row">
                                {navigation.map(({ name, href }) => (
                                    <li key={href}>
                                        <a href={href} className="px-4 py-2">
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav> */}
                    </div>
                </header>
                <main className="flex-1 mx-auto w-full max-w-5xl">
                    {children}
                </main>
                <footer></footer>
            </body>
        </html>
    );
}
