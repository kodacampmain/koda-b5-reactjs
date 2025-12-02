import { useState } from "react";

import AddTodoList from "../components/AddTodoList";
import ShowTodoList from "../components/ShowTodoList";

function TodoList() {
  const [todos, setTodos] = useState([
    { title: "Todo 1", content: "Lorem ipsum dolor sit amet." },
    { title: "Todo 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
  ]);
  return (
    <>
      <header className="p-5 h-[15vh] bg-amber-200 text-2xl font-bold select-none">Todo App</header>
      <main className="flex min-h-[85vh]">
        <ShowTodoList todos={todos} />
        <AddTodoList changeTodos={setTodos} />
      </main>
    </>
  );
}

export default TodoList;
