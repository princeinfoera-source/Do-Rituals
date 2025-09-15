import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../contexts/RoleContext";
import Logo from "../assets/imgs/doRituals.webp";

const roles = ["admin", "manager", "priest", "delivery-partner"];

const DashboardLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();
  const { setRole } = useRole();


  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert("Please select a role");
      return;
    }
    console.log(selectedRole)
    localStorage.setItem("role", selectedRole);
    console.log(`/dashboard/${selectedRole}`),
      setRole(selectedRole);
    navigate(`/dashboard/${selectedRole}`, {
      state: { email, password, role: selectedRole },
      replace: true,
    });

    console.log(email, password, selectedRole);

    setEmail("");
    setPassword("");
    setSelectedRole("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-100 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Do-Rituals Logo" className="h-20 mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-800">Dashboard Login</h2>
          <p className="text-gray-500 text-sm mt-1">Access your account</p>
        </div>
        <div className="mt-6">
          <span className="block mb-2 font-semibold text-gray-700">Select your role:</span>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <label
                key={role}
                className={`flex items-center justify-center border rounded-lg px-3 py-2 cursor-pointer transition-all ${selectedRole === role
                    ? "border-orange-500 bg-orange-50 text-orange-600 font-semibold shadow-md"
                    : "border-gray-300 text-gray-700 hover:border-orange-400"
                  }`}
              >
                <input
                  type="radio"
                  name="role"
                  checked={selectedRole === role}
                  onChange={() => setSelectedRole(role)}
                  className="hidden"
                />
                {role}
              </label>
            ))}
          </div>
        </div>
        <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4 flex flex-col">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded-lg font-semibold text-lg text-orange-800 bg-gradient-to-r from-orange-500 to-yellow-600 shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-yellow-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardLogin;
