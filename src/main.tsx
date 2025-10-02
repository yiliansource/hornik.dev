import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PortfolioSite from "./PortfolioSite";
import "./globals.css";
import { applyIsDark, getInitialIsDark } from "./lib/theme";

applyIsDark(getInitialIsDark());

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PortfolioSite />
    </StrictMode>,
);
