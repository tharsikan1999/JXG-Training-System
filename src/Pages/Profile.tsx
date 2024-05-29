import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import user from "../assets/Img/user.png";
import ChangePassword from './ChangePassword';
import axios from 'axios';


const Profile = () => {
  const navigate = useNavigate();
  
  return (
    <div className= "grid grid-cols-2" >
      <div>
        {/**image container -col 1*/}
        <div className="flex justify-center items-center flex-col">
          <img src={user} className="w-24 h-24 rounded-full"/>
          <input type="file" className=" w-30 text-sm mt-3"/>
        </div>
        <ChangePassword/>
      </div>
      {/**User details -col 2 */}
      <div className="py-2 px-9">
        <div>
          <h2 className="text-lg font-semibold py-4">User Details</h2>
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
      </div>
    </div>
  );
};

export default Profile;
