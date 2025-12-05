import { useEffect, useState } from "react";
import CardTodoList from "./CardTodoList";
import Loader from "./Loader";

import { useSearchParams } from "react-router";
/**
 * Component to show todo list
 * @param {Object} props
 * @param {import("./AddTodoList").todo[]} props.todos
 * @param {boolean} props.isLoading
 * @returns
 */
function ShowTodoList(props) {
  const { todos, isLoading } = props;
  const [searchParam, setSearchParam] = useSearchParams();
  // const navigate = useNavigate()
  // const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState({
    search: "",
    option: "1",
  });
  useEffect(() => {
    (() => {
      // sinkronisasi
      setQuery(() => {
        const newQuery = {};
        searchParam.forEach((value, key) => {
          Object.assign(newQuery, { [key]: value });
        });
        return newQuery;
      });
      // filter ketika ada perubahan query param
      // setFilteredData(() => {
      //   const filteredData = todos.filter((todo) => {
      //     return todo.content.includes(searchParam.get("search"));
      //   });
      //   return filteredData;
      // });
    })();
  }, [searchParam]);
  return (
    <section className="flex-1 p-5 border-2 border-solid border-primary">
      <h2 className="text-2xl font-bold mb-2">My Todo List</h2>
      <form
        className="my-2 flex gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParam(new URLSearchParams(query));
        }}
      >
        <input
          className="border-std border-black p-1 rounded-md text-black"
          type="text"
          name="search"
          placeholder="Type to search content"
          value={query.search}
          onChange={(e) => {
            setQuery((query) => ({ ...query, [e.target.name]: e.target.value }));
          }}
          // onKeyDown={(e) => {
          //   if (e.key !== "Enter") return;
          //   setSearchParam(new URLSearchParams({ [e.target.name]: e.target.value }));
          // }}
        />
        <select
          name="option"
          value={query.option}
          onChange={(e) => {
            setQuery((query) => ({ ...query, [e.target.name]: e.target.value }));
          }}
        >
          <option value="1">Satu</option>
          <option value="2">Dua</option>
        </select>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            setSearchParam({});
          }}
        >
          Reset
        </button>
        <button className="cursor-pointer" type="submit">
          Filter
        </button>
      </form>
      <p>{searchParam.toString()}</p>
      <div className="grid grid-cols-5 gap-2">
        {/* {[<CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />]} */}
        {!isLoading &&
          // !searchParam.size &&
          todos
            .filter((todo) => {
              if (!searchParam.get("search")) {
                return true;
              }
              return todo.content.includes(searchParam.get("search"));
            })
            .map((todo, idx) => {
              return <CardTodoList key={idx} content={todo.content} title={todo.title} />;
            })}
        {/* {!!searchParam.size &&
          filteredData.map((todo, idx) => {
            return <CardTodoList key={idx} content={todo.content} title={todo.title} />;
          })} */}
        {isLoading && <Loader />}
      </div>
    </section>
  );
}

export default ShowTodoList;
