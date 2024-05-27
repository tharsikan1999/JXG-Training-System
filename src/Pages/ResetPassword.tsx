import login from "../assets/Img/login.png";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Img/jxg_main_logo.png";

export default function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 sm-grid-cols-2 h-screen w-full">
      {/*form container*/}
      <div className="bg-white-100 flex flex-col w-full items-center justify-center">
        <form className="max-w-md w-full max-auto bg-white p-8 items-center">
          <div
            onClick={() => navigate("/")}
            className=" cursor-pointer  flex justify-center items-center mb-3"
          >
            <img src={logo} alt="jxg logo" className=" h-16 mb-6" />
          </div>

          <div className="flex flex-col py-2 ">
            <label className=" font-semibold text-gray-500 mb-2">
              New Password
            </label>
            <input className="border p-2 rounded-lg " type="password" />
          </div>
          <div className="flex flex-col py-2 ">
            <label className=" font-semibold text-gray-500 mb-2">
              Confirm Password
            </label>
            <input className="border p-2 rounded-lg " type="password" />
          </div>
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="text-white bg-yellow-500 w-full  mt-5 bg-gradient-to-br from-CustomYellow to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-xl mr-5 font-semibold px-8 h-12 text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Reset Password{" "}
          </button>
        </form>
      </div>
      {/*image container*/}
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover" src={login} />
      </div>
    </div>
  );
}
