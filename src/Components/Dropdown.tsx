import React from "react";

interface DropdownProperties{
    name: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Dropdown: React.FC<DropdownProperties> = ({name,value,options,onChange}) => {
    return(
        <div className="mb-4">
            <label className="block mb-1 capitalize">{name}</label>
            <select 
                name="{name}"
                value={value}
                onChange={onChange}
                className="border border-gray-300 p-1 w-48 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500" >
                    <option value="">Select {name}</option>
                    {options.map((option)=>(
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
        </div>
    );
};

export default Dropdown;