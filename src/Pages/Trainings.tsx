import SearchBar from "../Components/SearchBar";
import SortBar from "../Components/Sorting bars/SortBar";
import TrainingTable from "../Components/Tables/TrainingTable";
const Trainings = () => {
  return (
    <div>
      <div className="flex space-x-9">
        <SearchBar/> 
        <SortBar/>
          <button
                          className="text-white bg-CustomYellow
                          px-5 py-2 my-3 focus:outline-none rounded-lg 
                          text-sm mr-5 font-semibold text-center 
                          transition-transform duration-300 ease-in-out transform hover:scale-105">
                          Change Password{" "}
          </button>
          
      </div>
      <div className=" scroll-auto overflow-scroll">
            <TrainingTable />
          </div>
      
    </div>
  );
};

export default Trainings;
