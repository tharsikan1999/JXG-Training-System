import { useNavigate } from "react-router-dom";
import CandidatesTable from "../Components/Tables/CandidatesTable";
import AddCandidate from "./AddCandidate";

const Candidates = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end ">
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
              onClick={() => navigate("/assessment")}
              type="button"
              className="text-white bg-CustomYellow
              px-4 py-2 my-3 ml-3 focus:outline-none rounded-lg 
              text-sm font-semibold text-center 
              transition-transform duration-300 ease-in-out transform hover:scale-105">
              Bulk Add{" "}
        </button>
      </div>
      <div className=" scroll-auto overflow-scroll">
      <CandidatesTable />
    </div>
    </div>
  );
};

export default Candidates;
