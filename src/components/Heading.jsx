import { Link, useNavigate } from "react-router";

import LogoReact from "../assets/react.svg";
import useLocalStorage from "../hooks/useLocalStorage";

/**
 * Header Component
 * @param {Object} props
 * @param {string} props.title The title of the Header Component
 * @returns {JSX.Element}
 */
function Heading({ title }) {
  const [activeUser, , removeActiveUser] = useLocalStorage("koda5-user", {
    user: null,
  });
  const navigate = useNavigate();
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
      <header className="flex h-[15vh] justify-between bg-amber-200 p-5 text-2xl font-bold select-none">
        <div className="flex gap-2">
          <img src={LogoReact} alt="logo-react" width={36} height={32} />
          <h1 className="self-center font-black">{title}</h1>
        </div>
        <nav className="flex items-center justify-center p-5">
          <ul className="[&_li]:border-std flex gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/todolist"}>TodoList</Link>
            </li>
            {activeUser.user && (
              <li>
                <button
                  className="border-none bg-transparent p-0"
                  onClick={() => {
                    removeActiveUser();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Heading;
