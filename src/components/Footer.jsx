import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12 px-6 sm:px-16 mt-20 shadow-inner ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Branding Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400">Cravory</h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Serving your cravings with love and flavor.  
            Your favorite food delivered fast and fresh.
          </p>
          <div className="flex space-x-4 mt-6 text-2xl">
            <a
              href="https://github.com/theflashyash99"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yash-jaiswal-664588231"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-sm">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            <li><a href="/grocery" className="hover:text-yellow-400 transition-colors">Grocery</a></li>
            <li><a href="/cart" className="hover:text-yellow-400 transition-colors">Cart</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-sm">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>support@cravory.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <span>Cravory HQ, Food Lane, Bengaluru, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Cravory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
