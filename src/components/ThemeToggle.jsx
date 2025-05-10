import React, { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 bg-gray-800 dark:bg-gray-100 p-2 rounded-full text-white dark:text-gray-800 z-50 transition-all"
      title="Toggle Theme"
    >
      {darkMode ? <RiSunLine size={22} /> : <RiMoonClearLine size={22} />}
    </button>
  );
};

export default ThemeToggle;
