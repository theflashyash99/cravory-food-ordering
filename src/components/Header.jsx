import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant.js";
import { useState , useContext } from "react";
import About from "./About.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/userContext.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="header fixed top-0 left-0 w-full z-50 flex justify-between  bg-red-500 h-[100px] shadow-lg">
      <div className="logo-container mb-auto mt-[-20px]">
        <Link to="/">
        
          <img className="logo w-20 rounded-full ml-5 m-7" src={LOGO_URL} alt="logo" />
        </Link>
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
          <li className="px-4 text-white font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
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
          <li className=" px-4 font-bold text-white"> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

