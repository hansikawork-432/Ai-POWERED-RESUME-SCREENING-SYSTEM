import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
