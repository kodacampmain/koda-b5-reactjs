import { Link } from "react-router";
function Heading({ title }) {
  //   const { name, batch, func } = props;
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
        <nav className="flex justify-center items-center">
          <ul className="flex gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/todolist"}>TodoList</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Heading;
