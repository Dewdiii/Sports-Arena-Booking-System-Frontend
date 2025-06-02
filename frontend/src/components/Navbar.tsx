import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import arena from "../assets/Arena.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900">
      <Link to="/" className="flex items-center mr-10 ml-10">
        <img src={logo} alt="Arena Logo" className="h-10 w-auto mr-0" />
        <img src={arena} alt="Arena" className="h-10 w-auto mr-2" />
      </Link>
    </div>
  );
};

export default Navbar;
