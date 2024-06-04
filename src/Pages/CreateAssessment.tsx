import React from "react";
import { useState } from "react";
import { TEInput } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
const CreateAssessment=()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        assessmentName: '',
        assessmentDescription:'',
        question:'',
    });
    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name,value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }));
    };
    return(
        <div>
            <div className="mt-4 mx-28">
                <textarea
                    className="border border-gray-300 p-1 w-full rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="trainingName"
                    value={formData.assessmentName}
                    onChange={handleChange}
                    placeholder="Assessment Name"/>
            </div>
            <div className="mt-4 mx-28">
                <textarea
                    className="border border-gray-300 p-1 w-full rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="trainingDescription"
                    value={formData.assessmentDescription}
                    onChange={handleChange}
                    placeholder="Assessment Description"/>
            </div>
            <div className="mt-4 mx-28">
                <textarea
                    className="border border-gray-300 p-1 w-full h-auto rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="trainingDescription"
                    value={formData.assessmentDescription}
                    onChange={handleChange}
                    placeholder="Question 01
                    Q1
                    Q2
                    Q3"/>
            </div>
            <div className="flex justify-end">
            <button
                onClick={() => navigate("/assessment")}
                type="button"
                className="text-white bg-CustomYellow
                px-4 py-2 my-3 mr-6 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Save Format{" "}
            </button>
            <button
                onClick={() => navigate("/assessment")}
                type="button"
                className="text-white bg-CustomYellow
                px-4 py-2 my-3 mr-28 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Assign{" "}
            </button>
            </div>
        </div>
    );
};
export default CreateAssessment;