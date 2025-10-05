import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PortfolioSite from "./PortfolioSite";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PortfolioSite />
    </StrictMode>,
);
