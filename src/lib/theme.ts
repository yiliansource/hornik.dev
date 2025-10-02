export const IS_DARK_KEY = "isDark";

export function getInitialIsDark() {
    const readTheme = localStorage.getItem(IS_DARK_KEY);
    return readTheme ? Boolean(readTheme === "true") : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function getIsDark() {
    return document.body.dataset.dark === "true";
}

export function applyIsDark(d: boolean) {
    document.body.dataset.dark = String(d);
}
