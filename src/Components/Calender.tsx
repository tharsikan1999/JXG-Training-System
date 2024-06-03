import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../custom_datepicker.css"

const Calender =() =>{
    const[startDate, setStartDate] = useState(new Date());
    return(
        <div>
            <div>
                <DatePicker selected={startDate} onChange={(date:Date)=>setStartDate(date)}
                className="border border-gray-300 p-1 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-amber-500"
                dateFormat="dd/MM/yyyy" 
                 />
            </div>
        </div>
    );
};
export default Calender; 