import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import arena from "../assets/Arena.png";
//import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  //const { isLoggedIn } = useAppContext();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <Link to="/" className="flex items-center mr-12">
        <img src={logo} alt="Arena Logo" className="h-10 w-auto mr-0" />
        <img src={arena} alt="Arena" className="h-10 w-auto mr-2" />
      </Link>
      <div className="flex space-x-20 mr-auto">
        <Link to="/explore" className="text-white transition duration-350">
          EXPLORE
        </Link>
        <Link to="/about-us" className="text-white transition duration-300">
          ABOUT US
        </Link>
        <Link to="/help" className="text-white transition duration-300">
          HELP
        </Link>
      </div>
      <div className="flex space-x-4 ml-4">
        <Link
          to="/login"
          className="flex items-center border text-sm border-lime-500 bg-gray-800 text-lime-500 px-4 py-2 font-bold rounded-full hover:bg-lime-500  hover:text-black transition duration-300"
        >
          Login
        </Link>

        <Link
          to="/registertype"
          className="flex items-center border text-sm border-lime-500 bg-gray-800 text-lime-500 px-4 py-2 font-bold rounded-full hover:bg-lime-500  hover:text-black transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
