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

const DefaultLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
      <div
        className={` text-white min-h-screen shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "w-24" : "w-64"
        }`}
      >
        <div className=" h-20 flex px-8 cursor-pointer justify-between items-center shadow-md">
          <img
            src={logo}
            alt="logo.svg"
            className={`h-8 transition-all duration-300 ${
              menuOpen ? " hidden" : " flex"
            }`}
          />
          <GiHamburgerMenu
            className="h-8 w-8 text-gray-600"
            onClick={toggleMenu}
          />
        </div>
        <div className="h-auto">
          <ul className="flex flex-col items-center pt-10 px-7 space-y-10">
            <li className="flex items-center w-full">
              <MdDashboard
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer `}
              />

              <p
                className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                  menuOpen ? " hidden" : " flex"
                } `}
              >
                Dashboard
              </p>
            </li>
            <li className="flex items-center w-full">
              <IoIosPeople
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Candidates
                </p>
              )}
            </li>
            <li className="flex items-center w-full">
              <MdAssignment
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Trainings
                </p>
              )}
            </li>
            <li className="flex items-center w-full">
              <GiProgression
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Progress
                </p>
              )}
            </li>
            <li className="flex items-center w-full">
              <MdFeedback
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Feedback
                </p>
              )}
            </li>
            <li className="flex items-center w-full">
              <TbReportSearch
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Reports
                </p>
              )}
            </li>
            <li className="flex items-center w-full">
              <CgProfile
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Profile
                </p>
              )}
            </li>
            <li className="flex items-center w-full">
              <MdAdminPanelSettings
                className={`${
                  menuOpen ? "h-9 w-9" : "h-6 w-6"
                } text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
              />
              {!menuOpen && (
                <p
                  className={`text-xl font-semibold text-gray-400 hover:text-black ml-7 transition-all duration-300 cursor-pointer ${
                    menuOpen ? " hidden" : " flex"
                  } `}
                >
                  Admin
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-10 bg-gray-100">
        <header className="bg-white shadow-md rounded-md p-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Header</h1>
        </header>
        <section className="bg-white shadow-md rounded-md p-6">
          <p className="text-gray-600">Main content goes here</p>
        </section>
      </div>
    </div>
  );
};

export default DefaultLayout;
