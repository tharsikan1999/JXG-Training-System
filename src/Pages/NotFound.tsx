import React from "react";
import error from '../assets/Img/error.jpg';

export default function NotFound(){
    return(
        <div className="grid grid-cols-2 sm-grid-cols-2 h-screen w-full">
            <div className="bg-white-100 flex flex-col items-center justify-center">
                <h1 className="text-7xl font-bold py-6 px-8">Ooops.....</h1>
                <h2 className="text-3xl font-bold py-4 px-8">Page not found</h2>
                <h3 className="text-lg py-4 px-8">Page is not found please go back</h3>
                <button className="inline-block rounded border w-64 my-5 py-2 px-8 bg-indigo-600 hover:bg-indigo-500 text-white">Go Back</button>
            </div>
            <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={error}/>
            </div>
        </div>
    )
}