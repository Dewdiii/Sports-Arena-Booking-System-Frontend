import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import arena from "../assets/Arena.png";
//import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  //const { isLoggedIn } = useAppContext();
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <Link to="/" className="mr-12 flex items-center">
        <img src={logo} alt="Arena Logo" className="mr-0 h-10 w-auto" />
        <img src={arena} alt="Arena" className="mr-2 h-10 w-auto" />
      </Link>
      <div className="mr-auto flex space-x-20">
        <Link to="/booking" className="duration-350 text-white transition">
          MY BOOKINGS
        </Link>
        <Link to="/dashboard" className="text-white transition duration-300">
          ARENAS
        </Link>
        <Link to="/help" className="text-white transition duration-300">
          HELP
        </Link>
      </div>
      <div className="ml-4 flex space-x-4">
        <Link
          to="/login"
          className="flex items-center rounded-full border border-lime-500 bg-gray-800 px-4 py-2 text-sm font-bold text-lime-500 transition duration-300 hover:bg-lime-500 hover:text-black"
        >
          Login
        </Link>

        <Link
          to="/registertype"
          className="flex items-center rounded-full border border-lime-500 bg-gray-800 px-4 py-2 text-sm font-bold text-lime-500 transition duration-300 hover:bg-lime-500 hover:text-black"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
