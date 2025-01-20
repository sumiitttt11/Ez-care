import logo from "../assests/logo.png"; // Updated path
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './compcss/NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 shadow-lg transition-all duration-500 ease-in-out bg-white dark:bg-gray-900">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className="w-[134px] transition-all duration-500 hover:scale-105" src={logo} alt="logo" />
        </Link>
      </div>

      {/* Center: Navigation Links (Desktop) with Custom URLs */}
      <ul className="hidden lg:flex items-center space-x-8 text-gray-700 dark:text-gray-200">
        <li className="menu-item hover:scale-110 transition-all duration-300 ease-in-out">
          <Link to="/find-talent" className="hover:text-blue-600">
            Get Service
          </Link>
        </li>
        <li className="menu-item hover:scale-110 transition-all duration-300 ease-in-out">
          <Link to="/find-work" className="hover:text-blue-600">
            Find Work
          </Link>
        </li>
        <li className="menu-item hover:scale-110 transition-all duration-300 ease-in-out">
          <Link to="/about-us" className="hover:text-blue-600">
            Why ExpertCare
          </Link>
        </li>
        <li className="menu-item hover:scale-110 transition-all duration-300 ease-in-out">
          <Link to="/whats-new" className="hover:text-blue-600">
            What's New
          </Link>
        </li>
        <li className="menu-item hover:scale-110 transition-all duration-300 ease-in-out">
          <Link to="/enterprise" className="hover:text-blue-600">
            Enterprise Solutions
          </Link>
        </li>
      </ul>

      {/* Right: Search, Theme Toggle, Sign Up */}
      <div className="flex items-center space-x-6">
        {/* Search Box with Animation */}
        <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full focus-within:w-48 transition-all duration-500 ease-in-out">
          <span className="text-gray-600 dark:text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="search-input bg-transparent ml-2 text-gray-700 dark:text-gray-200 focus:outline-none"
          />
        </div>

        {/* Dark Mode Toggle with Animation 
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>*/}

        {/* Log In and Sign Up with 3D Hover */}
        <Link to="/login" className="hidden lg:block text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Log In
        </Link>
        <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:translate-y-1">
          Sign Up
        </Link>

        {/* Hamburger Menu (Mobile Only) with Animated Transform */}
        <button
          className={`hamburger text-gray-700 dark:text-gray-200 lg:hidden focus:outline-none transition-all duration-500 ease-in-out transform ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </button>
      </div>

      {/* Collapsible Mobile Menu with Staggered Animation and Custom URLs */}
      <div
        className={`mobile-menu absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-40 overflow-hidden transition-all duration-500 transform ${menuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'}`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4 text-gray-700 dark:text-gray-200">
          <li className="menu-item transition-all duration-500 ease-in-out transform hover:scale-110">
            <Link to="/find-talent" className="hover:text-green-600">
              Find Talent
            </Link>
          </li>
          <li className="menu-item transition-all duration-500 ease-in-out transform hover:scale-110">
            <Link to="/find-work" className="hover:text-green-600">
              Find Work
            </Link>
          </li>
          <li className="menu-item transition-all duration-500 ease-in-out transform hover:scale-110">
            <Link to="/why-ezworks" className="hover:text-green-600">
              Why EzWorks
            </Link>
          </li>
          <li className="menu-item transition-all duration-500 ease-in-out transform hover:scale-110">
            <Link to="/whats-new" className="hover:text-green-600">
              What's New
            </Link>
          </li>
          <li className="menu-item transition-all duration-500 ease-in-out transform hover:scale-110">
            <Link to="/enterprise" className="hover:text-green-600">
              Enterprise
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
