import React, { useState } from "react";
import App from "./App";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Charts from "./components/Charts";

function MainApp() {
  const [showExtras, setShowExtras] = useState(true);
const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <App />
      {showExtras && (
        <>
          <Loader />
          <Charts result={{ score: 60 }} />
        </>
      )}
    </div>
  );
}

export default MainApp;
