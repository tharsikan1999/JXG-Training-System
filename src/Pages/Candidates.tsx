import { useNavigate } from "react-router-dom";
import CandidatesTable from "../Components/Tables/CandidatesTable";
import SearchBar from "../Components/SearchBar";
import SortBar from "../Components/Sorting bars/SortBar";
import AddCandidate from "./AddCandidate";
import BulkAdd from "./BulkAdd";

const Candidates = () => {
  const navigate = useNavigate();
  const handleSearch =(query: string)=>{
    console.log('Search query:', query);
  };
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="flex space-x-4">
          <SearchBar onSearch={handleSearch}/>
          <SortBar/>
        </div>
        <div className="flex space-x-4">
        <button
              onClick={() => navigate("/add_candidate")}
              type="button"
              className="text-white bg-CustomYellow
              px-4 py-2 my-3 focus:outline-none rounded-lg 
              text-sm font-semibold text-center 
              transition-transform duration-300 ease-in-out transform hover:scale-105">
              Add Candidate{" "}
        </button>
        <button
              onClick={() => navigate("/bulk_add")}
              type="button"
              className="text-white bg-CustomYellow
              px-4 py-2 my-3 ml-3 focus:outline-none rounded-lg 
              text-sm font-semibold text-center 
              transition-transform duration-300 ease-in-out transform hover:scale-105">
              Bulk Add{" "}
        </button>
        </div>
      </div>
      <div className=" scroll-auto overflow-scroll">
      <CandidatesTable />
    </div>
    </div>
  );
};

export default Candidates;
