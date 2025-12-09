import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// import "./index.css";
// import App from "./pages/App";
// import TodoList from "./pages/TodoList";
// import NotFound from "./pages/NotFound";
import Router from "./Router";
import ThemeProvider from "./contexts/theme/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
