import { useContext } from "react";
import { ThemeContext } from "./Theme";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
   onClick={() => {
        console.log("Before:", theme);
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}

export default ThemeToggle;
