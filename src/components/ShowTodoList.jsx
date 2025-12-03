import CardTodoList from "./CardTodoList";
import Loader from "./Loader";

// const todos = [
//   { title: "Todo 1", content: "Lorem ipsum dolor sit amet." },
//   { title: "Todo 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
// ];

function ShowTodoList(props) {
  const { todos, isLoading } = props;
  return (
    <section className="flex-1 p-5 border-2 border-solid border-black">
      <h2 className="text-2xl font-bold mb-2">My Todo List</h2>
      <div className="grid grid-cols-5 gap-2">
        {/* {[<CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />]} */}
        {!isLoading &&
          todos.map((todo, idx) => {
            return <CardTodoList key={idx} title={todo.title} content={todo.content} />;
          })}
        {isLoading && <Loader />}
      </div>
    </section>
  );
}

export default ShowTodoList;
