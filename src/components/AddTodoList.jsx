import { useState } from "react";
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
function AddTodoList(props) {
  const { changeTodos } = props;
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [form, setForm] = useState({
    title: "",
    content: "",
    // isCompleted: false,
  });
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {};
    // validasi tidak boleh kosong title
    // jika error maka stop
    // Object.assign(newTodo, { title: event.target["todo-title"].value });
    Object.assign(newTodo, { title: form.title });
    // validasi tidak boleh kosong content
    // jika error maka stop
    // Object.assign(newTodo, { content: event.target["todo-content"].value });
    Object.assign(newTodo, { content: form.content });
    changeTodos((todos) => {
      return [...todos, newTodo];
    });
    // event.target["todo-title"].value = "";
    // setTitle("");
    // event.target["todo-content"].value = "";
    // setContent("");
    setForm({
      title: "",
      content: "",
    });
  };
  const onChangeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.id]: e.target.value };
    });
  };
  return (
    <aside className="w-[20vw] p-5 border-2 border-solid border-black">
      <form noValidate onSubmit={submitHandler}>
        <header className="text-center font-bold text-xl">Add Todo</header>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="todo-title"
            id="title"
            value={form.title}
            onChange={onChangeHandler}
            className="border-2 border-solid border-black p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="todo-content"
            id="content"
            value={form.content}
            onChange={onChangeHandler}
            className="border-2 border-solid border-black p-1 w-full h-[200px] resize-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="border-2 border-black border-solid p-1 cursor-pointer select-none">
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
}

export default AddTodoList;
