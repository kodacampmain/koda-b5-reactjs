import { useContext } from "react";
import { themeContext as tc } from "../contexts/theme/themeContext";

/**
 * Component of each todo list
 * @jenis {tipedata} nama
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.content
 * @returns {JSX.Element}
 */
function CardTodoList({ title, content }) {
  const theme = useContext(tc);
  console.log(theme);
  return (
    <article className="cursor-pointer rounded-lg border-2 border-solid border-black p-1">
      <h3 className="border-b-2 border-solid border-black text-xl font-bold">
        {title || "Judul"}
      </h3>
      <p className="font-roboto">{content || "Lorem ipsum dolor sit amet."}</p>
    </article>
  );
}

export default CardTodoList;
