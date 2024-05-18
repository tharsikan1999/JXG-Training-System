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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
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
                </li>
              );
            })}
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
