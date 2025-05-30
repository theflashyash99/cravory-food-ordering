import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant.js";
import { useState } from "react";
import About from "./About.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
       
      </div>

      <div className="nav-items">
        <ul>
          <li> Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li> <Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
          <li> <Link to="/about" style={{ textDecoration: 'none' }}> About Us</Link></li>
          <li> <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us </Link> </li>
          <li> <Link to="/cart" style={{ textDecoration: 'none' }}>Cart</Link> </li>
          <button
            className="loginbtn"
            onClick={() => {
             btnName === "Login" 
             ? setbtnName("Logout") 
             : setbtnName("Login");
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
