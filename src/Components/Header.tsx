import { Link } from "react-router-dom";
import logo from "../assets/ajo logo.svg";

const Header = () => {
  return (
    <div
      className="w-full h-[5rem] -mb-2 bg-[#77DD77]  flex items-center justify-between px-10 lg:px-24"
      id="header"
    >
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button className="border border-black rounded-lg p-2 w-[8rem] hover:bg-gray-200 transition-all duration-500">
        <Link to="/reg">Get Started</Link>
      </button>
    </div>
  );
};

export default Header;
