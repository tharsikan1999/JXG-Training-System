import { useNavigate } from "react-router-dom";
import Logo from "../assets/Img/JXG_logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-img min-h-screen w-full bg-center bg-no-repeat bg-cover">
      <div className="h-20 flex justify-between items-center">
        <img
          src={Logo}
          alt="JXG Logo"
          className="m-3 h-10 cursor-pointer  ease-in-out transform hover:scale-110 transition-all duration-700  "
        />
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="text-white bg-yellow-500 bg-gradient-to-br first-line: from-CYellow to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-xl mr-5 font-semibold px-8 h-12 text-center transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
