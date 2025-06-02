import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import arena from "../assets/Arena.png";
import profileImage from "../assets/profile.jpg"; // Add your profile image asset here

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900">
      <Link to="/" className="flex items-center mr-10 ml-10">
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
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white">Sakuni Sathsarani</span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
            <Link
              to="/manage-account"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <span className="ml-2">Manage account</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <span className="ml-2">Help</span>
            </Link>
            <Link
              to="/signout"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <span className="ml-2">Sign out</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
