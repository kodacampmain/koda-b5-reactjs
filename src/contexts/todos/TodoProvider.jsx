import { useReducer } from "react";
import { todoContext as TodoContext } from "./todoContext";

function TodoProvider({ children }) {
  const initialState = {
    todos: [
      {
        title: "Todo 1",
        content: "Contexts sssssss sssssssssssssss",
        id: 1,
        isCompleted: false,
      },
    ],
    lastId: 1,
  };
  // action akan di dispatch dari komponen, action berbentuk object
  // biasanya setiap action akan diberikan properti type untuk identifikasinya
  // action: ADD_TODOS, DELETE_TODOS
  // biasanya setiap action bisa membawa data menggunakan property payload
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "ADD_TODOS": {
        const newTodos = [...prevState.todos, action.payload];
        return {
          ...prevState,
          todos: newTodos,
          lastId: prevState.lastId + 1,
        };
      }
      case "DELETE_TODOS": {
        // asumsikan judul dari todos pasti unique
        const newTodos = prevState.todos.filter((todo) => {
          return todo.id !== action.payload;
        });
        return {
          ...prevState,
          todos: newTodos,
        };
      }
      case "EDIT_TODOS": {
        return prevState;
      }
      case "TOGGLE_TODOS": {
        return prevState;
      }
      default:
        return prevState;
    }
  }, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
