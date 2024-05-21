import React from "react";
import login from '../assets/Img/login.png';

export default function Login(){
  return (
    <div className="grid grid-cols-2 sm-grid-cols-2 h-screen w-full">
      {/*form container*/}
      <div className="bg-white-100 flex flex-col w-full items-center justify-center">
        <form className="max-w-md w-full max-auto bg-white p-8 items-center">
          <h2 className="text-4xl font-bold text-center py-6">Welcome Back</h2>
          <h3 className="text-center mb-4">Welcome Back! Please enter your details</h3>
          <div className="flex flex-col py-2">
            <label>Email</label><input className="border p-2 rounded" type="text" placeholder="Enter your email"/>
          </div>
          <div className="flex flex-col py-2 ">
            <label>Password</label><input className="border p-2 rounded" type="password"/>
          </div>
          <div className="flex justify-between ">
            <p className="flex items-center "><input className="mr-2" type="checkbox"/>Remember me</p>
            <a href="/forgot-password" className="text-indigo-600 hover:underline">Forgot password</a>
          </div>
          <button className="inline-block rounded border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">Sign In</button>
        </form>
      </div>
      {/*image container*/}
      <div className="hidden sm:block border-2 border-red-600 bg-no-repeat bg-center">
        <img className="w-full h-screen object-cover" src={login}/>
      </div>
    </div>
  )
}
