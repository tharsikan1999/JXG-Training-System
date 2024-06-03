import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";
import Calender from "../Components/Calender";
import Dropdown from "../Components/Dropdown";


const CreateTraining = () => {
  const [formData, setFormData] = useState({
    status: '',
    startDate: '',
    endDate: '',
    zone: '',
    region: '',
    format: '',
    location: '',
    trainingType: '',
    trainingName: '', 
    branch: '',       
    channel: '',      
    trainersName: '', 
    trainingDescription: '', 
    adminInstructions: '',   
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      trainingType: value,
    }));
  };
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="mt-1">
            <div className="mb-4 mx-28">
            <label className="block mb-1">Date</label>
              <Calender />
            </div>
            <div className="mx-28">
                <Dropdown name="Training Type" 
                value={formData.trainingType} 
                options={["CDS","AVO","CDS2","CDS3","Other"]}
                onChange={handleDropdownChange}
                />
            </div>
            <div className="mb-4 mx-28">
              <label className="block mb-1">Start Date</label>
                <Calender/>
            </div>
            <div className="mb-4 mx-28">
              <label className="block mb-1">Zone</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="zone"
                value={formData.zone}
                onChange={handleChange}
                placeholder="Zone"
              />
            </div>
            <div className="mb-4 mx-28">
              <label className="block mb-1">Region</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Region"
              />
            </div>
            <div className="mb-4 mx-28">
              <label className="block mb-1">Format</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="format"
                value={formData.format}
                onChange={handleChange}
                placeholder="Format"
              />
            </div>
            <div className="mb-4 mx-28">
              <label className="block mb-1">Location</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="mt-1">
            <div className="mb-4">
              <label className="block mb-1">Status</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="status"
                value={formData.status}
                readOnly
                placeholder="Scheduled"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Training Name</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="trainingName"
                value={formData.trainingName}
                onChange={handleChange}
                placeholder="Training Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">End Date</label>
              <Calender/>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Branch</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Branch"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Channel</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="channel"
                value={formData.channel}
                onChange={handleChange}
                placeholder="Channel"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Trainer's Name</label>
              <input
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                type="text"
                name="trainersName"
                value={formData.trainersName}
                onChange={handleChange}
                placeholder="Trainer's Name"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mx-28">
          <label className="block mb-1">Training Description</label>
          <textarea
            className="border border-gray-300 p-1 w-full rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-amber-500"
            name="trainingDescription"
            value={formData.trainingDescription}
            onChange={handleChange}
            placeholder="Training Description"
          />
        </div>

        <div className="mt-4 mx-28">
          <label className="block mb-1">Admin Instructions</label>
          <textarea
            className="border border-gray-300 p-1 w-full rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-amber-500"
            name="adminInstructions"
            value={formData.adminInstructions}
            onChange={handleChange}
            placeholder="Admin Instructions"
          />
        </div>
        <div className="flex justify-end mt-6">
            <button
                onClick={() => navigate("/*")}
                type="button"
                className="text-white bg-CustomYellow
                px-4 py-2 my-3 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Create Assessment{" "}
            </button>
            <button
                onClick={() => navigate("/*")}
                type="button"
                className="text-white bg-CustomYellow ml-5
                px-4 py-2 my-3 mr-28 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Schedule Training{" "}
            </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTraining;
