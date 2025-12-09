/**
 * Ambil data yang lama kalau ada di localstorage
 * JIka ada data yang baru, maka save di localstorage
 */
import { useEffect, useState } from "react";

function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const old = localStorage.getItem(key);
    if (!old) {
      if (typeof initialState === "function") return initialState();
      return initialState;
    }
    return JSON.parse(old);
  });
  useEffect(() => {
    const newData = JSON.stringify(value);
    localStorage.setItem(key, newData);
  }, [value, key]);
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialState);
  };
  return [value, setValue, removeValue];
  //   return { value, setValue, removeValue };
}

export default useLocalStorage;
// localstorage yang berisikan info login => {}
// localstorage yang menyimpan tema aplikasi => string | boolean
// localstorage yang menyimpan data movies => []
