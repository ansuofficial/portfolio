import React from "react";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

function Toggler() {
  const [darkMode, setdarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setdarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "theme");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {darkMode ? (
        <CiLight
          onClick={() => setdarkMode(false)}
          className="w-5 h-5 text-white  cursor-pointer"
        />
      ) : (
        <MdLightMode
          onClick={() => setdarkMode(true)}
          className="w-5 h-5 text-white cursor-pointer"
        />
      )}
    </div>
  );
}

export default Toggler;
