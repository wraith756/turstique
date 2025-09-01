import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/trustique.jpg";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "FAQ", link: "/faq" },
  { id: 5, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
      style={{
        background:
          "linear-gradient(270deg, #000000, #1a1a1a, #2a2a2a, #1a1a1a, #000000)",
        backgroundSize: "500% 500%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Trustique Logo"
            className="w-9 h-9 rounded-full object-cover border border-white/40 shadow-md"
          />
          <span
            className="text-lg font-extrabold tracking-wider bg-gradient-to-r from-[#1E9F9F] via-teal-300 to-[#1E9F9F] bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(30,159,159,0.7)]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "1px",
            }}
          >
            Trustique Assist
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide text-white transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#1E9F9F] after:transition-all after:duration-300
                hover:after:w-full ${
                  isActive
                    ? "after:w-full text-[#1E9F9F]"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "72px" }} // Match navbar height
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `relative py-3 px-4 text-lg font-medium tracking-wide text-white transition-colors duration-300 rounded-lg
                  ${
                    isActive
                      ? "bg-[#1E9F9F]/20 text-[#1E9F9F] border-l-4 border-[#1E9F9F]"
                      : "text-white/90 hover:bg-gray-800/50"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
