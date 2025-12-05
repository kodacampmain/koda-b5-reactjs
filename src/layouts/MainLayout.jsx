import { Outlet } from "react-router";
import Heading from "../components/Heading";

function MainLayout() {
  return (
    <>
      <Heading title="Main" />
      {/* if rute == / then <App /> else <TodoList /> */}
      <Outlet />
    </>
  );
}

export default MainLayout;
