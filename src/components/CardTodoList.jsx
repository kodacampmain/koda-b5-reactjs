/**
 * Component of each todo list
 * @jenis {tipedata} nama
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.content
 * @returns {JSX.Element}
 */
function CardTodoList({ title, content }) {
  return (
    <article className="border-2 border-black border-solid p-1 cursor-pointer rounded-lg">
      <h3 className="text-xl font-bold border-b-2 border-black border-solid">{title || "Judul"}</h3>
      <p>{content || "Lorem ipsum dolor sit amet."}</p>
    </article>
  );
}

export default CardTodoList;
