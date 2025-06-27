import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="bg-gradient-to-r from-red-900 via-black to-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img src={LOGO_URL} alt="Cravory Logo" className="h-14 w-14 rounded-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 font-medium">
          <span className="text-yellow-400">Online: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/cart" className="hover:text-yellow-300">Cart ({cartItems.length})</Link>
          <Link to="/grocery" className="hover:text-yellow-300">Grocery</Link>
          <button
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded transition"
          >
            {btnName}
          </button>
          <span className="ml-2 font-bold text-yellow-300">{loggedInUser}</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Slideout Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 text-white border-t border-gray-700 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
            <span className="text-yellow-400">Online: {onlineStatus ? "✅" : "❌"}</span>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Contact</Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">
              Cart ({cartItems.length})
            </Link>
            <Link to="/grocery" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Grocery</Link>
            <button
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
                setMenuOpen(false);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded"
            >
              {btnName}
            </button>
            <div className="font-bold text-yellow-300">{loggedInUser}</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
