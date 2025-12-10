import { useEffect, useContext } from "react";

import AddTodoListRedux from "../components/AddTodoListRedux";
import ShowTodoListRedux from "../components/ShowTodoListRedux";
import Heading from "../components/Heading";
import { themeContext } from "../contexts/theme/themeContext";

function TodoList() {
  const { theme } = useContext(themeContext);
  useEffect(() => {
    document.title = "My Judul";
  }, []);
  return (
    <>
      <Heading title={"Todo App"} />
      <main className={`${theme.style} flex min-h-[85vh] p-[10px_2px]`}>
        {/* <ShowTodoList todos={todos} isLoading={isLoading} /> */}
        <ShowTodoListRedux />
        {/* <AddTodoList changeTodos={setTodos} /> */}
        <AddTodoListRedux />
      </main>
    </>
  );
}

export default TodoList;
