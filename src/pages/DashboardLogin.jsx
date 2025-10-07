import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../contexts/RoleContext";
import Logo from "../assets/imgs/doRituals.webp";

const roles = ["manager", "priest", "delivery-partner", "admin"];

const DashboardLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const { setRole } = useRole();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setDropdownOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    localStorage.setItem("role", selectedRole);
    setRole(selectedRole);
    navigate(`/dashboard/${ selectedRole }, {
      state: { email, password, role: selectedRole },
      replace: true,
    }`);

    setEmail("");
    setPassword("");
    setSelectedRole("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-100 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col">
        {/* Logo and Header */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Do-Rituals Logo" className="h-20 mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-800">
            Dashboard Login
          </h2>
          <p className="text-gray-500 text-sm mt-1">Access your account</p>
        </div>
        {/* Form */}
        <form
          onSubmit={handleLoginSubmit}
          className="mt-6 space-y-4 flex flex-col"
        >
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
            required
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
            required
          />
          {/* Role Dropdown */}
          <pre>This is for testing only</pre>
          <div className="relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex justify-between items-center transition hover:border-orange-400"
            >
              <span
                className={selectedRole ? "text-gray-800" : "text-gray-400"}
              >
                {selectedRole || "Select your role"}
              </span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {roles.map((role) => (
                  <div
                    key={role}
                    onClick={() => handleRoleSelect(role)}
                    className="px-4 py-2 cursor-pointer hover:bg-orange-100 transition"
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded-lg font-semibold text-lg text-orange-800 bg-gradient-to-r from-orange-500 to-yellow-600 shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-yellow-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Login
          </button>
          {/* Register Button */}
          <div className="text-center mt-4">
            <button
              onClick={() => navigate("/signup-request")}
              className="cursor-pointer text-orange-600 hover:underline"
              type="button"
            >
              Register as a new user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardLogin;