import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos } from "../redux/slices/todos.slice";
// import { todoContext } from "../contexts/todos/todoContext";
/**
 * Todo Object
 * @typedef {Object} todo
 * @property {string} todo.title
 * @property {string} todo.content
 */
/**
 * Component to add new todolist
 * @param {Object} props
 * @param {import("react").Dispatch<import("react").SetStateAction<todo[]>>} props.changeTodos
 * @returns {JSX.Element}
 */
function AddTodoList() {
  // const { changeTodos } = props;
  const todosState = useSelector((state) => {
    return state.todos;
  });
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    content: "",
    // point: 0,
    // isCompleted: false,
  });
  const [error, setError] = useState({
    title: false,
    content: false,
    // point: ""
  });
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todosState.nextId,
      isCompleted: false,
    };
    // validasi tidak boleh kosong title
    // jika error maka stop
    // Object.assign(newTodo, { title: event.target["todo-title"].value });
    Object.assign(newTodo, { title: form.title });
    // validasi tidak boleh kosong content
    // jika error maka stop
    // Object.assign(newTodo, { content: event.target["todo-content"].value });
    Object.assign(newTodo, { content: form.content });
    // dispatch({
    //   type: "ADD_TODOS",
    //   payload: newTodo,
    // });
    dispatch(addTodos(newTodo));
    setForm({
      title: "",
      content: "",
    });
  };
  const onChangeHandler = (e) => {
    // validasi
    // 1. Judul minimum 8 karakter
    if (e.target.id === "title") {
      if (e.target.value.length < 8) {
        setError({
          [e.target.id]: true,
        });
      } else {
        setError({
          [e.target.id]: false,
        });
      }
    }
    setForm((form) => {
      return { ...form, [e.target.id]: e.target.value };
    });
  };
  return (
    <aside className="w-[20vw] border-2 border-solid border-black p-5">
      <form noValidate onSubmit={submitHandler}>
        <header className="text-center text-xl font-bold">Add Todo</header>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="todo-title"
            id="title"
            value={form.title}
            onChange={onChangeHandler}
            className="w-full border-2 border-solid border-black p-1"
          />
          <p className="min-h-12 font-bold text-red-600">
            {error.title && "Judul minimum 8 karakter"}
          </p>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="todo-content"
            id="content"
            value={form.content}
            onChange={onChangeHandler}
            className="h-[200px] w-full resize-none border-2 border-solid border-black p-1"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer border-2 border-solid border-black p-1 select-none"
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
}

export default AddTodoList;
