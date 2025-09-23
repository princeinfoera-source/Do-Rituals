import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/imgs/doRituals.webp";
import { templeData } from "../store/templeSampleData";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import LotteUserProfile from "../assets/lotte/User.json";
import Login from "../pages/Login.jsx";

const OmIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline mr-2 text-white"
    fill="currentColor"
    viewBox="0 0 64 64"
    height="20"
    width="20"
  >
    <path d="M32 2C26 10 20 14 20 22s4 8 4 8-6 3-6 10 10 10 10 10 6 1 6 4-2 8-2 8 10-2 10-14-10-16-14-16c-2 0-4 0-4-2s3-8 10-8c0-8-6-12-10-20z" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "http://localhost:5173/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const getTextColor = () => {
    if (isScrolled || isHovered || !isHomePage) {
      return "text-gray-700";
    }
    if (isHomePage) return "text-white";
    return "text-gray-900";
  };

  const getBackgroundColor = () => {
    if (!isHomePage) {
      return "bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-200 shadow-lg";
    }
    if (isScrolled || isHovered) {
      return "bg-white shadow-lg";
    }
    return "bg-transparent";
  };

  const handleTempleClick = (temple) => {
    navigate(`/temples/${temple.name.replace(/\s+/g, "-").toLowerCase()}`, {
      state: { temple },
    });
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLogin(true);
  };
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${getBackgroundColor()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="cursor-pointer transition-transform duration-300 transform group-hover:scale-105">
            <img src={Logo} alt="Website Logo" className="h-8 sm:h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex flex-grow justify-center font-medium ${getTextColor()} gap-6 lg:gap-8`}>
          <a href="/" className="relative group hover:text-orange-600 transition">Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <a href="#" className="relative group hover:text-orange-600 transition">Temples
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 sm:w-64 bg-white shadow-xl rounded-lg overflow-hidden py-2 z-50">
                {templeData.map((temple, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTempleClick(temple);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                  >
                    {temple.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/bhakti-dhara" className="relative group hover:text-orange-600 transition">Bhakti Dhara
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <a href="/puja" className="relative group hover:text-orange-600 transition">Puja
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <a href="/chadhava" className="relative group hover:text-orange-600 transition">Chadhava
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <a href="/ritual-mall" className="relative group hover:text-orange-600 transition">Ritual Mall
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <a href="/astrology" className="relative group hover:text-orange-600 transition">Astrology
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <a href="/library" className="relative group hover:text-orange-600 transition">Library
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>

          <a href="/support" className="relative group hover:text-orange-600 transition">Support
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>
        </nav>

        {/* Right buttons */}
        <div className="flex-shrink-0 flex items-center space-x-3 sm:space-x-4">
          <button className="hidden md:block cursor-pointer px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-700 text-white font-medium shadow-md hover:from-orange-600 hover:to-amber-800 transition transform hover:-translate-y-0.5">
            <OmIcon />
            <span>Book a Puja</span>
          </button>

          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden cursor-pointer"
            onClick={handleLoginClick}
          >
            <Lottie animationData={LotteUserProfile} loop autoplay />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${getTextColor()} focus:outline-none focus:ring-2 focus:ring-orange-400 rounded p-1`}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-100 md:hidden">
          <nav className="flex flex-col items-center space-y-4 font-medium text-gray-700">
            <a href="/" className="hover:text-orange-600 transition">Home</a>
            <a href="/temples" className="hover:text-orange-600 transition">Temples</a>
            <a href="/bhakti-dhara" className="hover:text-orange-600 transition">Bhakti Dhara</a>
            <a href="/puja" className="hover:text-orange-600 transition">Puja</a>
            <a href="/chadhava" className="hover:text-orange-600 transition">Chadhava</a>
            <a href="/ritual-mall" className="hover:text-orange-600 transition">Ritual Mall</a>
            <a href="/astrology" className="hover:text-orange-600 transition">Astrology</a>
            <a href="/library" className="hover:text-orange-600 transition">Library</a>
            <a href="/support" className="hover:text-orange-600 transition">Support</a>
            <a href="#" className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-700 text-white font-medium shadow-md hover:opacity-90">
              <OmIcon /> Book a Puja
            </a>
          </nav>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={handleCloseLogin}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseLogin}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 cursor-pointer"
              aria-label="Close"
            >
              &#x2715;
            </button>

            <Login />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
