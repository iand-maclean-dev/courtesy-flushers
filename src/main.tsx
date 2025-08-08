import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/shared/styles/tokens.css";
import "@/shared/styles/globals.css";
import App from "./App";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("#root element not found");

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
