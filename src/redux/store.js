import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./slices/todos.slice";
import pokemonReducer from "./slices/pokemon.slice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    pokemon: pokemonReducer,
  },
  devTools: import.meta.env.VITE_MODE === "development" ? true : false,
});

export default store;
