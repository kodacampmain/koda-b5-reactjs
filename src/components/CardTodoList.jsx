import { useContext } from "react";
import { todoContext } from "../contexts/todos/todoContext";
// import { themeContext as tc } from "../contexts/theme/themeContext";

/**
 * Component of each todo list
 * @jenis {tipedata} nama
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.content
 * @param {number} props.itemId
 * @param {boolean} props.isCompleted
 * @returns {JSX.Element}
 */
function CardTodoList({ title, content, itemId, isCompleted }) {
  // const theme = useContext(tc);
  const { dispatch } = useContext(todoContext);
  return (
    <article className="relative cursor-pointer rounded-lg border-2 border-solid border-black p-1">
      <h3 className="border-b-2 border-solid border-black text-xl font-bold">
        {title || "Judul"}
      </h3>
      <p className="font-roboto line-clamp-2 text-wrap">
        {content || "Lorem ipsum dolor sit amet."}
      </p>
      <p>{isCompleted ? "Sudah Dilakukan" : "Belum Dilakukan"}</p>
      <button
        className="absolute right-1 bottom-1 text-red-500"
        onClick={() => {
          dispatch({
            type: "DELETE_TODOS",
            payload: itemId,
          });
        }}
      >
        X
      </button>
    </article>
  );
}

export default CardTodoList;
