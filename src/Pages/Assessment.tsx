
import { useNavigate } from "react-router-dom";
const Assessment=()=>{
    const navigate = useNavigate();
    return(
        <div>
            <div className="grid grid-row-2 justify-center py-48">
            <button
                onClick={() => navigate("/assessment")}
                type="button"
                className="text-white bg-CustomYellow
                px-4 py-2 my-3 w-48 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Load Assessment{" "}
            </button>
            <button
                onClick={() => navigate("")}
                type="button"
                className="text-white bg-CustomYellow
                px-4 py-2 my-3 w-48 focus:outline-none rounded-lg 
                text-sm font-semibold text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                Create Assessment{" "}
            </button>
        </div>
        </div>
    );
};

export default Assessment;