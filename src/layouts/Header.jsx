import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";
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

const Header = ({ setHeaderHeight }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isTempleSubmenuOpen, setIsTempleSubmenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("Home");

  const headerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    setIsHomePage(path === "/" || path.startsWith("http://localhost:5173/"));

    if (path === "/") setIsSelected("Home");
    else if (path.startsWith("/temples")) setIsSelected("Temples");
    else if (path.startsWith("/puja")) setIsSelected("Puja");
    else if (path.startsWith("/chadhava")) setIsSelected("Chadhava");
    else if (path.startsWith("/pandit-on-call")) setIsSelected("Pandit on call");
    else if (path.startsWith("/astrology")) setIsSelected("Astrology");
    else if (path.startsWith("/library")) setIsSelected("Library");
    else setIsSelected("");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [setHeaderHeight]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsTempleSubmenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  const handleTempleClick = (temple) => {
    navigate(`/temples/${temple.name.replace(/\s+/g, "-").toLowerCase()}`, {
      state: { temple },
    });
    setIsMobileMenuOpen(false);
    setIsTempleSubmenuOpen(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLogin(true);
    setIsMobileMenuOpen(false);
  };

  const handleCloseLogin = () => setShowLogin(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) setIsTempleSubmenuOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getTextColor = () => {
    if (isScrolled || isHovered || !isHomePage) {
      return "text-gray-700";
    }
    if (isHomePage) return "text-grey";
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

  const getNavLinkClass = (name) =>
    `relative group hover:text-orange-600 transition ${
      isSelected === name ? "text-orange-600" : ""
    }`;

  const underlineSpan = (name) => (
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transition-transform duration-300 ease-out ${
        isSelected === name ? "scale-x-100" : "scale-x-0"
      }`}
    />
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${getBackgroundColor()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHomePage && headerRef.current
          ? { paddingTop: `-${headerRef.current.offsetHeight}px` }
          : undefined
      }
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex-shrink-0">
          <a
            href="/"
            className="cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
          >
            <img src={Logo} alt="Website Logo" className="h-8 sm:h-10 w-auto" />
          </a>
        </div>

        <nav
          className={`hidden md:flex flex-grow justify-center font-medium ${getTextColor()} gap-6 lg:gap-8`}
        >
          <a href="/" className={getNavLinkClass("Home")}>
            Home
            {underlineSpan("Home")}
          </a>

          {/* Temples button navigates directly to /temples, dropdown commented out */}
          <div className="relative">
            <a href="/temples" className={getNavLinkClass("Temples")}>
              Temples
              {underlineSpan("Temples")}
            </a>
          </div>

          <a href="/puja" className={getNavLinkClass("Puja")}>
            Puja
            {underlineSpan("Puja")}
          </a>

          <a href="/chadhava" className={getNavLinkClass("Chadhava")}>
            Chadhava
            {underlineSpan("Chadhava")}
          </a>

          <a href="/pandit-on-call" className={getNavLinkClass("Pandit on call")}>
            Pandit on call
            {underlineSpan("Pandit on call")}
          </a>

          <a href="/astrology" className={getNavLinkClass("Astrology")}>
            Astrology
            {underlineSpan("Astrology")}
          </a>

          <a href="/library" className={getNavLinkClass("Library")}>
            Library
            {underlineSpan("Library")}
          </a>
        </nav>

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

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${getTextColor()} focus:outline-none focus:ring-2 focus:ring-orange-400 rounded p-1`}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-100 md:hidden overflow-hidden h-screen animate-slideDown">
          <nav
            className={`flex flex-col items-center space-y-4 font-medium text-gray-700 transition-transform duration-300 ${
              isTempleSubmenuOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Home
            </a>

            <button
              type="button"
              onClick={() => setIsTempleSubmenuOpen(true)}
              className="w-full text-center py-2 hover:text-orange-600 transition flex justify-center items-center"
            >
              Temples
            </button>

            <a
              href="/puja"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Puja
            </a>

            <a
              href="/chadhava"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Chadhava
            </a>

            <a
              href="/pandit-on-call"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Pandit on call
            </a>

            <a
              href="/astrology"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Astrology
            </a>

            <a
              href="/library"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Library
            </a>

            <a
              href="/support"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-600 transition"
            >
              Support
            </a>

            <a
              href="#"
              className="px-5 py-2 mt-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-700 text-white font-medium shadow-md hover:opacity-90"
            >
              <OmIcon /> Book a Puja
            </a>
          </nav>

          <div
            className={`absolute top-0 w-full h-full bg-white transition-transform duration-300 transform ${
              isTempleSubmenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="px-4 py-4 h-full overflow-y-auto">
              <button
                type="button"
                onClick={() => setIsTempleSubmenuOpen(false)}
                className="text-gray-700 hover:text-orange-600 mb-6 focus:outline-none flex items-center space-x-2 font-semibold transition text-lg p-2 -ml-2"
              >
                <FaAngleLeft size={16} />
                <span>Back to Menu</span>
              </button>

              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                Select a Temple
              </h3>

              <nav className="flex flex-col space-y-1">
                {templeData.map((temple, index) => (
                  <button
                    key={index}
                    onClick={() => handleTempleClick(temple)}
                    className="text-left text-gray-700 hover:bg-orange-100 hover:text-orange-700 px-4 py-3 rounded transition flex justify-between items-center"
                  >
                    <span>{temple.name}</span>
                    <FaAngleRight className="text-sm text-orange-500" />
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100] p-4 animate-fadeIn"
          onClick={handleCloseLogin}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full relative animate-zoomIn"
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
