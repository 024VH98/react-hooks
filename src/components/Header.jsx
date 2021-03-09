import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className="Header">
      <h1 style={{color}}>React Hooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Dark Mode II" : "Light Mode II"}</button>
    </div>
  );
}

export default Header;