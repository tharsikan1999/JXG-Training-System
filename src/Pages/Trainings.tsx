import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import SortBar from "../Components/Sorting bars/SortBar";
import TrainingTable from "../Components/Tables/TrainingTable";


const Trainings = () => {
  const navigate = useNavigate();
  const handleSearch = (query: string)=>{
    console.log('Search query:', query);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <SearchBar onSearch={handleSearch}/>
          <SortBar />
        </div>
        <div className="sm:place-self-end">
        <button
            onClick={() => navigate("/create_training")}
            type="button"
            className="text-white bg-CustomYellow
            px-4 py-2 focus:outline-none rounded-lg 
            text-sm font-semibold text-center 
            transition-transform duration-300 ease-in-out transform hover:scale-105">
            Create Training{" "}
          </button>
        </div> 
      </div>
      <div className=" scroll-auto overflow-scroll">
            <TrainingTable />
          </div>
      
    </div>
  );
};

export default Trainings;
