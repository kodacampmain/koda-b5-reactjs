import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import "./index.css";
// import App from "./pages/App";
// import TodoList from "./pages/TodoList";
// import NotFound from "./pages/NotFound";
import Router from "./Router";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import TodoProvider from "./contexts/todos/TodoProvider";
import reduxStore, { persistedStore } from "./redux/store";
import Loader from "./components/Loader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <PersistGate
        persistor={persistedStore}
        loading={
          <Loader className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        }
      >
        <ThemeProvider>
          <TodoProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </TodoProvider>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
);
