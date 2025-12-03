import CardTodoList from "./CardTodoList";
import Loader from "./Loader";

/**
 * Component to show todo list
 * @param {Object} props
 * @param {import("./AddTodoList").todo[]} props.todos
 * @param {boolean} props.isLoading
 * @returns
 */
function ShowTodoList(props) {
  const { todos, isLoading } = props;
  return (
    <section className="flex-1 p-5 border-2 border-solid border-primary">
      <h2 className="text-2xl font-bold mb-2">My Todo List</h2>
      <div className="grid grid-cols-5 gap-2">
        {/* {[<CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />, <CardTodoList />]} */}
        {!isLoading &&
          todos.map((todo, idx) => {
            return <CardTodoList key={idx} content={todo.content} title={todo.title} />;
          })}
        {isLoading && <Loader />}
      </div>
    </section>
  );
}

export default ShowTodoList;
