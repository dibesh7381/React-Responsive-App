import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 rounded-md font-medium text-left transition-colors duration-200 ${
      isActive ? 'text-red-600' : 'text-black'
    } hover:text-blue-600`;

  const buttonBase =
    'px-4 py-2 rounded-full transition-all duration-300 active:scale-95';

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            {/* Auth Buttons */}
            <div className="flex space-x-3 ml-6">
              <NavLink
                to="/login"
                className={`${buttonBase} border border-blue-600 text-blue-600 hover:bg-blue-100`}
              >
                Log In
              </NavLink>
              <NavLink
                to="/signup"
                className={`${buttonBase} bg-blue-600 text-white hover:bg-blue-700`}
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none transition-transform duration-300"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <hr className="my-2" />

          {/* Mobile Auth Buttons */}
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className={`${buttonBase} text-center border border-blue-600 text-blue-600 hover:bg-blue-100`}
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            onClick={() => setIsOpen(false)}
            className={`${buttonBase} text-center bg-blue-600 text-white hover:bg-blue-700`}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




