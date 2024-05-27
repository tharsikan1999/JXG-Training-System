import React from "react";
import login from '../assets/Img/login.png';

export default function ResetPassword(){
    return(
        <div className="grid grid-cols-2 sm-grid-cols-2 h-screen w-full">
            {/*form container*/}
            <div className="bg-white-100 flex flex-col w-full items-center justify-center">
                <form className="max-w-md w-full max-auto bg-white p-8 items-center">
                <h2 className="text-4xl font-bold text-center py-6">Reset Password</h2>
                <div className="flex flex-col py-2">
                    <label>New Password</label><input className="border p-2 rounded" type="password"/>
                </div>
                <div className="flex flex-col py-2 ">
                    <label>Confirm Password</label><input className="border p-2 rounded" type="password"/>
                </div>
                <button className="inline-block rounded border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">Reset Password</button>
                </form>
            </div>
            {/*image container*/}
            <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={login}/>
            </div>
        </div>
    )
}