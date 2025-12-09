// import { Component } from "react";
// import "./App.css";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import Heading from "../components/Heading";
import useLocalStorage from "../hooks/useLocalStorage";
import useInput from "../hooks/useInput";
// import bgTebing from "../assets/tebing.jpg";

function App() {
  // const [count, setCount] = useState(0);
  // [state, setState]
  // const helloName = (name) => {
  //   console.log(`Hello ${name}`);
  // };
  // const noName = () => {
  //   console.log("gak ada nama oi");
  // };
  const [activeUser, setActiveUser] = useLocalStorage("koda5-user", {
    user: null,
  });
  const emailInput = useInput("", {
    required: true,
    minLength: 5,
  });
  const pwdInput = useInput("", {
    required: true,
    minLength: 8,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (activeUser.user) {
      navigate("/todolist", { replace: true });
    }
  }, [activeUser]);
  return (
    <>
      <Heading title="Wibi" />
      <main
        className={`relative flex min-h-screen items-center justify-center bg-[url('/src/assets/tebing.jpg')] bg-cover bg-center after:absolute after:inset-0 after:z-10 after:bg-black/20`}
      >
        <form
          className="border-std z-20 grid h-[70vh] w-2/3 grid-rows-[auto_1fr_auto_1fr_2fr] gap-1 rounded-md border-black bg-white p-2"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            // console.log("submit");
            // setActiveUser((activeUser) => {
            //   return { ...activeUser, user: e.target.email.value };
            // });
            console.log(emailInput.value);
            console.log(pwdInput.value);
            emailInput.reset();
            pwdInput.reset();
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailInput.value}
            onChange={emailInput.onChange}
            placeholder="Input your Email"
            className="border-std font-roboto rounded-sm border-black p-1 leading-none"
          />
          {!emailInput.isValid && <p className="error">{emailInput.error}</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={pwdInput.value}
            onChange={pwdInput.onChange}
            placeholder="Input your Password"
            className="border-std font-roboto rounded-sm border-black p-1 leading-none"
          />
          {!pwdInput.isValid && <p className="error">{pwdInput.error}</p>}
          <div className="flex items-start justify-end py-2">
            <button type="submit" className="">
              LOGIN
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
export default App;

// class AppClass extends Component {
//   state = {
//     count: 0,
//   };
//   render() {
//     return (
//       <>
//         <h1>Vite + React</h1>
//         <div>
//           <a href="https://vite.dev" target="_blank">
//             <img src={viteLogo} className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>
//         <div className="card">
//           <button
//             onClick={() =>
//               this.setState((state) => {
//                 return {
//                   ...state,
//                   count: state.count + 1,
//                 };
//               })
//             }
//           >
//             count is {this.state.count}
//           </button>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//       </>
//     );
//   }
// }
