import React from "react";
import { useState } from "react";
import { TEInput } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
const CreateAssessment=()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        assessmentName: '',
        assessmentDescription:'',
        question1:'',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        question2:'',
        answer2_1: '',
        answer2_2: '',
        answer2_3: '',
        answer2_4: '',
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
                    className="border border-amber-300 p-1 w-full rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="assessmentName"
                    value={formData.assessmentName}
                    onChange={handleChange}
                    placeholder="Assessment Name"/>
            </div>
            <div className="mt-4 mx-28">
                <textarea
                    className="border border-amber-300 p-1 w-full rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="assessmentDescription"
                    value={formData.assessmentDescription}
                    onChange={handleChange}
                    placeholder="Assessment Description"/>
            </div>
            <div className="mt-4 mx-28">
                <textarea
                    className="border border-amber-300 p-1 w-full h-auto rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="question1"
                    value={formData.question1}
                    onChange={handleChange}
                    placeholder="Question 01"
                />
                <div className="grid grid-rows-2 grid-flow-col gap-4 mt-2 ">
                    <input
                        className="border border-gray-300 p-1 rounded-md shadow-md 
                        focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="text"
                        name="answer1"
                        value={formData.answer1}
                        onChange={handleChange}
                        placeholder="Answer 1"
                    />
                    <input
                            className="border border-gray-300 p-1 rounded-md shadow-md
                            focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="text"
                            name="answer2"
                            value={formData.answer2}
                            onChange={handleChange}
                            placeholder="Answer 2"
                    />
                    <input
                            className="border border-gray-300 p-1 rounded-md shadow-md 
                            focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="text"
                            name="answer3"
                            value={formData.answer3}
                            onChange={handleChange}
                            placeholder="Answer 3"
                    />
                    <input
                        className="border border-gray-300 p-1 rounded-md shadow-md 
                        focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="text"
                        name="answer4"
                        value={formData.answer4}
                        onChange={handleChange}
                        placeholder="Answer 4"
                    />
                </div>   
            </div>
            <div className="mt-6 mx-28">
                <textarea
                    className="border border-amber-300 p-1 w-full h-auto rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-amber-500"
                    name="question2"
                    value={formData.question2}
                    onChange={handleChange}
                    placeholder="Question 02"
                />
                <div className="grid grid-rows-2 grid-flow-col gap-4 mt-2">
                    <input
                        className="border border-gray-300 p-1 rounded-md shadow-md 
                        focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="text"
                        name="answer2_1"
                        value={formData.answer2_1}
                        onChange={handleChange}
                        placeholder="Answer 1"
                    />
                    <input
                            className="border border-gray-300 p-1 rounded-md shadow-md
                            focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="text"
                            name="answer2_2"
                            value={formData.answer2_2}
                            onChange={handleChange}
                            placeholder="Answer 2"
                    />
                    <input
                            className="border border-gray-300 p-1 rounded-md shadow-md 
                            focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="text"
                            name="answer2_3"
                            value={formData.answer2_3}
                            onChange={handleChange}
                            placeholder="Answer 3"
                    />
                    <input
                        className="border border-gray-300 p-1 rounded-md shadow-md 
                        focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="text"
                        name="answer2_4"
                        value={formData.answer2_4}
                        onChange={handleChange}
                        placeholder="Answer 4"
                    />
                </div>   
            </div>
            <div className="flex justify-end">
            <button
                onClick={() => navigate("/*")}
                type="button"
                className="text-white bg-CustomYellow
                px-4 py-2 my-3 mr-6 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Save Format{" "}
            </button>
            <button
                onClick={() => navigate("/*")}
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