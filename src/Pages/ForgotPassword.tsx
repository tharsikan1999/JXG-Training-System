import React from "react";
import login from '../assets/Img/login.png';
import { Navigate, useNavigate } from "react-router-dom";

export default function ForgotPassword(){
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 sm-grid-cols-2 h-screen w-full">
      {/*form container */}
      <div className="bg-white-100 flex flex-col w-full items-center justify-center">
      <form className="max-w-md w-full max-auto bg-white p-8 items-center">
          <h2 className="text-4xl font-bold text-center py-6">Forgot Password</h2>
          <h3 className="text-center mb-6">Enter your email, we'll send you a link to reset your password</h3>
          <div className="flex flex-col py-5 my-5">
            <label>Email</label><input className="border p-2 rounded" type="text" placeholder="Enter your email"/>
          </div>  
          {/*linked the reset password page here temporily */}        
          <button onClick={() => navigate("/resetpassword")} type="button" className="inline-block rounded border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">Send Link</button>
        </form>
      </div>
      {/*Image container */}
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover" src={login}/>
      </div>
    </div>
  )
}