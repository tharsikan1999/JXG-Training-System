import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import user from "../assets/Img/user.png";
import uploading from "../assets/Icons/uploading.gif"; 
import edit from "../assets/Icons/edit.svg";


const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-2">
        
        <div>
          <div className="flex px-9">
            <span className="font-semibold w-32 h-10">Username</span>
            <span>user1999</span>
          </div>
          <div className="flex px-9">
            <span className="font-semibold w-32 h-10">Zone</span>
            <span>IT</span>
          </div>
          <div className="flex px-9">
            <span className="font-semibold w-32 h-10">Branch</span>
            <span>Colombo</span>
          </div>
          <div className="flex px-9">
            <span className="font-semibold w-32 h-10">Account Type</span>
            <span>Trainer</span>
          </div>
          <div className="flex px-9">
            <span className="font-semibold w-32 h-10">Region</span>
            <span>Sri Lanka</span>
          </div>
          <div className="flex px-9">
            <span className="font-semibold w-32 h-10">Channel</span>
            <span>Colombo</span>
          </div>
        </div>
        {/**image container */}
        <div>
          <img src={user} className="w-24 h-24 rounded-full"/>
          {/**
           *<button className="mt-3 bg-CustomPurple text-white px-4 py-2 rounded-lg" >Upload Image</button> 
           */}
          
          <input type="file" className=" w-30 text-sm mt-3"/>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="px-9 mt-20">
          <h2 className="text-lg font-semibold">Password</h2>
          <p className="text-gray">Click here to reset or change your password</p>
          
        </div>
        <div className="px-9 mt-20">
        <button
            onClick={() => navigate("/change_password")}
            type="button"
            className="text-white bg-CustomPurple px-8 py-2 focus:outline-none rounded-lg text-sm mr-5 font-semibold text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Change{" "}
          </button>
          </div>
      </div>
    </div>
  );
};

export default Profile;
