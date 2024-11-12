import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@app/providers/ThemeContext";
import AppProvider from "./providers/AppProvider";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "@app/appRouter";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppProvider>
        <RouterProvider router={appRouter} />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);
