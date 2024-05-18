import React, { useState } from "react";
import logo from "../assets/Img/JXG_logo.png";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const DefaultLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("first");
  };

  return (
    <div className="border-2 border-red-600 w-full min-h-screen flex">
      <div className="border-2 border-red-600 min-h-screen w-96">
        <div className="border-2 border-red-600 h-20 flex px-8 cursor-pointer justify-between items-center">
          <img src={logo} alt="logo.svg" className="h-10" />
          <GiHamburgerMenu className="h-8 w-8" onClick={toggleMenu} />
        </div>
        <div className="border-4 border-blue-600 h-auto">
          <ul
            className={`w-full flex flex-col items-center pt-10 pl-5 border-2 border-red-600 ${
              menuOpen ? "hidden" : ""
            }`}
          >
            <li className="  flex items-center w-11/12 mb-10 border-4 border-blue-800 ">
              <MdDashboard className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black" />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer ml-7 hover:text-black">
                Dashboard
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-10">
              <IoIosPeople className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Candidates
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-10">
              <MdAssignment className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Trainings
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-10">
              <GiProgression className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Progress
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-10">
              <MdFeedback className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Feedback
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-10">
              <TbReportSearch className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Reports
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-10">
              <CgProfile className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Profile
              </p>
            </li>
            <li className="  flex items-center w-11/12 mb-1 ">
              <MdAdminPanelSettings className=" h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-black " />
              <p className=" text-lg font-semibold text-gray-600 hover:cursor-pointer hover:text-black ml-7">
                Admin Settings
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-2 border-green-600 w-full">
        <header className="border-2 border-blue-600 w-full h-20"></header>
        <section className="border-2 border-red-600 w-full h-auto"></section>
      </div>
    </div>
  );
};

export default DefaultLayout;
