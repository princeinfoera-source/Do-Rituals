import { useState, useEffect, useRef } from "react";
import { useRole } from "../../contexts/RoleContext.jsx";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, LogOut, Menu } from "lucide-react";
import logo from "../../assets/imgs/doRituals.webp";

const Header = ({ onMenuClick }) => {
  const { role } = useRole();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getInitials = (role) => {
    if (!role) return "?";
    return role
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/dashboard-login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${darkMode ? "bg-gray-800" : "bg-gray-900"
        } text-white py-3 shadow-lg sticky top-0 z-50`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left: Hamburger for mobile */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-700 transition"
        >
          <Menu size={22} />
        </button>

        {/* Center: Logo + Dashboard */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            Dashboard
          </h1>
        </div>

        {/* Right: Dark Mode + Profile */}
        <div className="flex items-center space-x-4 relative">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer select-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold shadow-md text-sm sm:text-base">
                {getInitials(role)}
              </div>
              <span className="hidden sm:inline-block font-medium text-gray-300">
                {role}
              </span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-40 py-2 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
