import { useState, useEffect } from "react";

import AddTodoList from "../components/AddTodoList";
import ShowTodoList from "../components/ShowTodoList";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  //   function a() {}
  useEffect(() => {
    document.title = "My Judul";
  }, []);
  useEffect(() => {
    // const url = "https://jsonplaceholder.typicode.com/todos";
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     const newTodos = data.slice(0, 7).map((item) => {
    //       return {
    //         title: `Todo ${item.id}`,
    //         content: item.title,
    //       };
    //     });
    //     setTodos(newTodos);
    //   })
    //   .catch((err) => console.error(err));
    (async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
        const data = await response.json();
        const newTodos = data.slice(0, 7).map((item) => {
          return {
            title: `Todo ${item.id}`,
            content: item.title,
          };
        });
        setTodos(newTodos);
      } catch (error) {
        console.error(error);
      }
    })();

    // return () => {
    //   removeEventListener();
    //   removeEventListener();
    //   removeEventListener();
    //   removeEventListener();
    //   removeEventListener();
    // };
  }, []);
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  useEffect(() => {
    console.log("Todo Berhasil Disubmit");
  }, [todos]);
  const inc = () => setCounter((counter) => counter + 1);
  return (
    <>
      <header className="p-5 h-[15vh] bg-amber-200 text-2xl font-bold select-none flex justify-between">
        <p>Todo App</p>
        <button className="cursor-pointer" onClick={inc}>
          Increment
        </button>
      </header>
      <main className="flex min-h-[85vh]">
        <ShowTodoList todos={todos} />
        <AddTodoList changeTodos={setTodos} />
      </main>
    </>
  );
}

export default TodoList;
