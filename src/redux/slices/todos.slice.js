import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  nextId: 1,
};

const todoSLice = createSlice({
  initialState,
  name: "todos",
  reducers: {
    addTodos: (prevState, action) => {
      const newTodos = [...prevState.todos, action.payload];
      // prevState.todos.push(action.payload)
      prevState.todos = newTodos;
      prevState.nextId++;
    },
    deleteTodos: (prevState, action) => {
      const newTodos = prevState.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      prevState.todos = newTodos;
    },
    editTodos: (prevState, action) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      prevState.todos = newTodos;
    },
    toggleTodos: (prevState, action) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      prevState.todos = newTodos;
    },
  },
});

export const { addTodos, deleteTodos } = todoSLice.actions;
export default todoSLice.reducer;
