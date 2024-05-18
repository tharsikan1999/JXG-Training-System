import logo from "../assets/Img/JXG_logo.png";
import {
  MdDashboard,
  MdFeedback,
  MdAdminPanelSettings,
  MdAssignment,
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiProgression, GiHamburgerMenu } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import userImg from "../assets/Img/user.png";
import { useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const menuItems = [
  { icon: MdDashboard, label: "Dashboard" },
  { icon: IoIosPeople, label: "Candidates" },
  { icon: MdAssignment, label: "Trainings" },
  { icon: GiProgression, label: "Progress" },
  { icon: MdFeedback, label: "Feedback" },
  { icon: TbReportSearch, label: "Reports" },
  { icon: CgProfile, label: "Profile" },
  { icon: MdAdminPanelSettings, label: "Admin" },
];

const DefaultLayout = () => {
  // Add this code snippet to the DefaultLayout component
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //night mode
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
      className={`w-full min-h-screen flex ${
        isDarkMode ? "dark" : ""
      } dark:bg-gray-900`}
    >
      <div
        className={`text-white min-h-screen shadow-lg transition-all duration-1000 ease-in-out ${
          menuOpen ? "w-24" : "w-64"
        }`}
      >
        <div className="h-20 flex px-6 cursor-pointer justify-between items-center shadow-md">
          <img
            src={logo}
            alt="logo.svg"
            className={`h-8 transition-all duration-1000 ml-1 ${
              menuOpen ? "hidden" : "flex"
            }`}
          />
          <GiHamburgerMenu
            className="h-8 w-8 ml-2 text-gray-600"
            onClick={toggleMenu}
          />
        </div>
        <div className="h-auto">
          <ul className="flex flex-col items-center pt-10 px-7 space-y-10">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index} className="flex items-center w-full">
                  <div className="flex items-center">
                    <IconComponent
                      className={`${
                        menuOpen ? "h-9 w-9" : "h-6 w-6"
                      } text-gray-400 hover:text-black transition-all duration-700 cursor-pointer`}
                    />
                    <p
                      className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-[600ms] cursor-pointer ${
                        menuOpen ? "opacity-0" : "opacity-100"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`px-3 flex-1 ${isDarkMode ? "dark" : ""} dark:bg-gray-900 `}
      >
        <header className=" shadow-md rounded-md py-3 px-12  mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-700">Header</h1>
          <div className="flex space-x-10">
            <div className="flex items-center justify-center transition-colors duration-500">
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
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
                  <div className="block w-[73px] px-1 h-[34px] bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  {/* Thumb */}
                  <div
                    className={`absolute left-1 top-[2px] w-[30px] h-[30px] bg-white  rounded-full transition-transform duration-300 ${
                      isDarkMode ? "translate-x-[35px]" : "translate-x-0"
                    }`}
                  ></div>
                  {/* Icon */}
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    {isDarkMode ? (
                      <FaMoon className="h-6 w-6 mb-[2px] text-gray-900 ml-11" />
                    ) : (
                      <MdSunny className="h-6 w-6 text-yellow-400 dark:text-yellow-300 ml-2" />
                    )}
                  </div>
                </div>
              </label>
            </div>
            <img
              src={userImg}
              alt="user"
              className="h-14 w-14 rounded-full cursor-pointer"
            />
          </div>
        </header>
        <section className="shadow-md rounded-md p-6">
          <p className="text-gray-600">Main content goes here</p>
        </section>
      </div>
    </div>
  );
};

export default DefaultLayout;
