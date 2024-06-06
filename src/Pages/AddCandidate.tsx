import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCandidate=()=>{
    const [formData, setFormData]= useState({
        name:'',
        phoneNumber:'',
        email:'',
        nic:'',
        zone:'',
        region:'',
        branch:'',
        channel:'',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <form className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/**column 1 */}
                        <div className="">
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Name</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="name" value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Candidate name"/>
                            </div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Email</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="email" value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Email"/>
                            </div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Zone</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="zone" value={formData.zone}
                                onChange={handleChange}
                                placeholder="Enter Zone"/>
                            </div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Branch</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="branch" value={formData.branch}
                                onChange={handleChange}
                                placeholder="Enter Branch"/>
                            </div>
                        </div>
                        {/**Column 2 */}
                        <div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Phone Number</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="phoneNumber" value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter Phone Number"/>
                            </div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">NIC</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="nic" value={formData.nic}
                                onChange={handleChange}
                                placeholder="Enter NIC Number"/>
                            </div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Region</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="region" value={formData.region}
                                onChange={handleChange}
                                placeholder="Enter Region"/>
                            </div>
                            <div className="mb-4 mx-28">
                                <label className="block mb-1">Channel</label>
                                <input className="border border-gray-300 p-1 rounded-md
                                shadow-sm focus:outline-none focus:ring focus:ring-amber-500"
                                type="text" name="channel" value={formData.channel}
                                onChange={handleChange}
                                placeholder="Enter Channel"/>
                            </div>
                        </div>  
                    </div>
                    
                </form>
                <div className="w-full flex justify-center">
                        <div className="flex justify-center m-8">
                            <button
                                onClick={() => navigate("/*")}
                                type="button"
                                className="text-white bg-CustomYellow
                                px-4 py-2 my-3 w-28 focus:outline-none rounded-lg 
                                text-sm font-semibold text-center 
                                transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Submit{" "}
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default AddCandidate;