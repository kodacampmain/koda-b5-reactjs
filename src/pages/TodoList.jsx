import { useState, useEffect } from "react";

import AddTodoList from "../components/AddTodoList";
import ShowTodoList from "../components/ShowTodoList";
import Heading from "../components/Heading";

function TodoList() {
  const [todos, setTodos] = useState([]);
  // const [, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    console.log(
      parseInt(import.meta.env.VITE_NUM_1) +
        parseInt(import.meta.env.VITE_NUM_2),
    );
    setTimeout(
      () =>
        (async () => {
          const url = `${import.meta.env.VITE_API}/todos`;
          try {
            // aktifkan loading state
            const response = await fetch(url);
            if (!response.ok)
              throw new Error(`${response.status}: ${response.statusText}`);
            const data = await response.json();
            const newTodos = data.slice(0, 7).map((item) => {
              return {
                title: `Todo ${item.id}`,
                content: item.title,
              };
            });
            // non-aktifkan loading state
            setIsLoading(false);
            setTodos(newTodos);
          } catch (error) {
            console.error(error);
          }
        })(),
      2000,
    );

    // return () => {
    //   removeEventListener();
    //   removeEventListener();
    //   removeEventListener();
    //   removeEventListener();
    //   removeEventListener();
    // };
  }, []);
  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);
  // useEffect(() => {
  //   console.log("Todo Berhasil Disubmit");
  // }, [todos]);
  // const inc = () => setCounter((counter) => counter + 1);
  return (
    <>
      <Heading title={"Todo App"} />
      <main className="bg-asap text-primary flex min-h-[85vh] p-[10px_2px]">
        <ShowTodoList todos={todos} isLoading={isLoading} />
        <AddTodoList changeTodos={setTodos} />
      </main>
    </>
  );
}

export default TodoList;
