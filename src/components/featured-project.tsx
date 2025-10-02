import { Badge } from "./ui/badge";

export function FeaturedProject({
    name,
    summary,
    tags,
    bannerSrc,
    children,
}: React.PropsWithChildren<{
    name: string;
    summary?: React.ReactNode;
    bannerSrc?: string;
    tags?: string[];
}>) {
    return (
        <article className="">
            <h2 className="mb-2 text-3xl font-semibold">{name}</h2>
            {summary && <p className="text-foreground-muted mb-2">{summary}</p>}
            {bannerSrc && (
                <div className="mb-2 overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={bannerSrc} alt={name} draggable={false} />
                </div>
            )}
            <div className="mt-4 text-sm">{children}</div>
            {tags && (
                <div className="mt-4 flex flex-row gap-2">
                    {tags?.map((t) => (
                        <Badge key={t}>{t}</Badge>
                    ))}
                </div>
            )}
        </article>
    );
}
