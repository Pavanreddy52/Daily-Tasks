import { useContext } from "react";
import { ThemeContext } from "./Theme";

function Navbar() {
  const { theme } = useContext(ThemeContext); 

  return (
    <nav className={theme === "dark" ? "dark" : "light"}>
      <h1>Navbar - {theme} mode</h1>
    </nav>
  );
}

export default Navbar;
