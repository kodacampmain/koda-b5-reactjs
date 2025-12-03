import { Link } from "react-router";

/**
 * Header Component
 * @param {Object} props
 * @param {string} props.title The title of the Header Component
 * @returns {JSX.Element}
 */
function Heading({ title }) {
  // const { title } = props;
  // if (!name) {
  //   onError();
  //   return (
  //     <header className="bg-amber-500">
  //       <h1 className="text-3xl text-bold">Tidak Ada Nama</h1>
  //     </header>
  //   );
  // }
  // func(name);
  return (
    <>
      <header className="p-5 h-[15vh] bg-amber-200 text-2xl font-bold select-none flex justify-between">
        <h1 className="font-sans font-black">{title}</h1>
        <nav className="flex justify-center items-center border-std p-5">
          <ul className="flex gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/todolist"}>TodoList</Link>
            </li>
            <li>
              <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Heading;
