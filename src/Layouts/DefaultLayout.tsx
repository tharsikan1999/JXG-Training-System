import logo from "../assets/Img/JXG_logo.png";
import {
  MdFeedback,
  MdAdminPanelSettings,
  MdAssignment,
  MdSunny,
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiProgression, GiHamburgerMenu } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaMoon, FaBell } from "react-icons/fa";
import { ReactNode, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userImg from "../assets/Img/user.png";

const menuItems = [
  { icon: IoIosPeople, label: "Candidates", route: "/candidates" },
  { icon: MdAssignment, label: "Trainings", route: "/trainings" },
  { icon: GiProgression, label: "Progress", route: "/progress" },
  { icon: MdFeedback, label: "Feedback", route: "/feedback" },
  { icon: TbReportSearch, label: "Reports", route: "/reports" },
  { icon: CgProfile, label: "Profile", route: "/profile" },
  { icon: MdAdminPanelSettings, label: "Admin", route: "/admin" },
];

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Night mode
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

  const handleMenuItemClick = (route: string) => {
    navigate(route);
  };

  return (
    <div
      className={`w-full min-h-screen flex ${
        isDarkMode ? "dark" : ""
      } dark:bg-gray-900`}
    >
      <div className={` ${isDarkMode ? "dark" : ""} dark:bg-gray-800`}>
        {" "}
        <div
          className={`text-white min-h-screen shadow-lg transition-all duration-1000 ease-in-out ${
            menuOpen ? "w-28" : "w-64"
          }
       `}
        >
          <div className="h-20 flex px-6 cursor-pointer justify-between items-center shadow-md">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo.svg"
              className={`h-8 transition-all duration-1000 ml-1 ${
                menuOpen ? "hidden" : "flex"
              }`}
            />
            <GiHamburgerMenu
              className="h-8 w-8 ml-2 text-CustomYellow"
              onClick={toggleMenu}
            />
          </div>
          <div className="h-auto">
            <ul className="flex flex-col items-center pt-10 pr-7 pl-3 relative space-y-11 transition-all duration-[600ms]">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.route;

                return (
                  <li
                    key={index}
                    className={`flex items-center w-full cursor-pointer  `}
                    onClick={() => handleMenuItemClick(item.route)}
                  >
                    <div
                      className={`h-[70px] w-2 rounded-tr-xl rounded-br-xl transition-all duration-[600ms] absolute left-0 ${
                        isActive ? "bg-CustomYellow" : "hidden"
                      } ${menuOpen ? "hidden" : "flex"}`}
                    ></div>
                    <div className="flex items-center ml-5">
                      <IconComponent
                        className={` ${
                          isActive
                            ? " text-gray-900 dark:text-CustomYellow"
                            : ""
                        } ${
                          menuOpen ? "h-9 w-9" : "h-6 w-6"
                        } text-gray-400  transition-all duration-700
                     
                      hover:text-CustomYellow`}
                      />
                      <p
                        className={`text-xl font-semibold text-gray-400 hover:text-CustomYellow ml-7 transition-all duration-[600ms] ${
                          menuOpen ? "opacity-0" : "opacity-100"
                        } ${
                          isActive
                            ? " text-gray-900 dark:text-CustomYellow"
                            : ""
                        } `}
                        style={{
                          transitionDelay: `${index * 100}ms `,
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
      </div>
      <div className={`px-3 flex-1 `}>
        <header
          className={`shadow-md rounded-md py-4 px-12 mb-6 flex justify-between items-center ${
            isDarkMode ? "dark" : ""
          } dark:bg-gray-800`}
        >
          <div></div>
          <div className="flex space-x-10 items-center">
            <div className="flex items-center justify-center transition-colors duration-500">
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />
                  <div className="block w-14 px-1 h-7 bg-gray-200 dark:bg-CustomYellow rounded-full"></div>
                  <div
                    className={`absolute left-1 top-1 w-[23px] h-[23px] -translate-y-[1.8px] bg-white rounded-full transition-transform duration-300 ${
                      isDarkMode ? "translate-x-[27px]" : "translate-x-0"
                    }`}
                  ></div>
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none transition-all duration-[600ms]">
                    {isDarkMode ? (
                      <FaMoon className="h-[18px] w-5 mb-[2px] text-gray-900 ml-[33px] " />
                    ) : (
                      <MdSunny className="h-5 w-5 text-yellow-400 dark:text-yellow-300 ml-[6px]" />
                    )}
                  </div>
                </div>
              </label>
            </div>
            <FaBell className="text-2xl text-CustomYellow cursor-pointer" />
            <img
              src={userImg}
              alt="user"
              className="h-12 w-12 rounded-full cursor-pointer"
            />
          </div>
        </header>
        <section
          className={`${
            isDarkMode ? "dark" : ""
          } dark:bg-CustomGray shadow-md rounded-md p-6`}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default DefaultLayout;
