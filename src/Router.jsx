import { Routes, Route } from "react-router";

import App from "./pages/App";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/NotFound";

function Router() {
  // / => App
  // /todolist => Todolist
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todolist" element={<TodoList />} />
      {/* Rute Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
