import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./pages/App";
import TodoList from "./pages/TodoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <TodoList />
  </StrictMode>
);
