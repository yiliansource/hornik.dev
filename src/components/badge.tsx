export function Badge({ children }: React.PropsWithChildren) {
    return (
        <span className="rounded-lg bg-green-600/20 px-3 py-1 text-xs text-green-600 select-none dark:bg-green-400/20 dark:text-green-400">
            {children}
        </span>
    );
}
