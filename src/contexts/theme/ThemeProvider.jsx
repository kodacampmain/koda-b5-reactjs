import { useState } from "react";
import { themeContext as ThemeContext } from "./themeContext";
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    mode: "dark",
    style: "bg-gray-600 text-white",
  });

  const toggleTheme = () => {
    if (theme.mode === "dark") {
      setTheme({
        mode: "light",
        style: "bg-white text-black",
      });
      return;
    }
    setTheme({
      mode: "dark",
      style: "bg-gray-600 text-white",
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// <ThemeProvider>
//  children component
// </ThemeProvider>

export default ThemeProvider;
