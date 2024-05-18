import { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const NightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex items-center justify-center  ${
        isDarkMode ? "dark" : ""
      } dark:bg-gray-900 transition-colors duration-500`}
    >
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          {/* Hidden input */}
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          {/* Switch */}
          <div className="block w-[70px] h-9 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
          {/* Thumb */}
          <div
            className={`absolute left-1 top-1 w-7 h-7 bg-white dark:bg-gray-800 rounded-full transition-transform duration-300 ${
              isDarkMode ? "translate-x-8" : ""
            }`}
          ></div>
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            {isDarkMode ? (
              <FaMoon className="h-6 w-6 text-gray-900 dark:text-white ml-2" />
            ) : (
              <MdSunny className="h-6 w-6 text-yellow-400 dark:text-yellow-300 ml-10" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default NightMode;
