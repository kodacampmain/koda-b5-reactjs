import { configureStore } from "@reduxjs/toolkit";
import {
  persistCombineReducers,
  persistStore,
  PERSIST,
  REHYDRATE,
  FLUSH,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import todosReducer from "./slices/todos.slice";
import pokemonReducer from "./slices/pokemon.slice";

const persistConfig = {
  key: "koda5-redux",
  storage,
  whitelist: ["todos"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  todos: todosReducer,
  pokemon: pokemonReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_MODE === "development" ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, FLUSH, REGISTER, PURGE],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
