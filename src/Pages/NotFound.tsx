import error from "../assets/Img/404.png";
import logo from "../assets/Img/jxg_main_logo.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 sm-grid-cols-2 h-screen w-full">
      <div className="bg-white-100 flex flex-col items-center justify-center">
        <div
          onClick={() => navigate("/")}
          className=" cursor-pointer  flex justify-center items-center "
        >
          <img src={logo} alt="jxg logo" className=" h-16 mb-6" />
        </div>
        <h1 className="text-7xl text-CustomYellow font-bold py-6 px-8">
          Ooops.....
        </h1>

        <button
          onClick={() => navigate("/")}
          type="button"
          className="text-white bg-yellow-500 w-1/2  mt-5 bg-gradient-to-br from-CustomYellow to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-xl mr-5 font-semibold px-8 h-12 text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back{" "}
        </button>
      </div>
      <div className=" flex justify-center items-center ">
        <div className=" h-3/4">
          <img className="w-full object-cover" src={error} />
        </div>
      </div>
    </div>
  );
}
