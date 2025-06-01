import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant.js";
import { useState } from "react";
import About from "./About.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header fixed top-0 left-0 w-full z-50 flex justify-between bg-red-500 h-20 shadow-lg">
      <div className="logo-container mb-auto mt-[-15px]">
        <Link to="/">
        
          <img className="logo w-32 rounded-full ml-5 m-7" src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      <div className="flex justify-start items-end ml-[-830px] mt-[130px] text-xl text-orange-400">
        <i>Cravory</i>
      </div>

      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-white">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="loginbtn text-white"
            onClick={() => {
              setbtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

