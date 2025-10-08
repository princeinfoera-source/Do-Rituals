import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/imgs/doRituals.webp";

const roles = ["manager", "priest", "delivery-partner"];

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setDropdownOpen(false);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (!selectedRole) {
            alert("Please select a role");
            return;
        }

        const registerData = {
            fullName,
            mobile,
            otp,
            password,
            role: selectedRole,
        };
        console.log("Register Data:", registerData);

        // TODO: Add API call to handle registration here

        // Reset form fields
        setFullName("");
        setMobile("");
        setOtp("");
        setPassword("");
        setSelectedRole("");
        setDropdownOpen(false);

        // Optionally navigate to login after registration
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-100 to-white p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col">
                <div className="flex flex-col items-center">
                    <img src={Logo} alt="Do-Rituals Logo" className="h-20 mb-4" />
                    <h2 className="text-3xl font-extrabold text-gray-800">Register</h2>
                    <p className="text-gray-500 text-sm mt-1">Create your account</p>
                </div>
                <form
                    onSubmit={handleRegisterSubmit}
                    className="space-y-4 flex flex-col mt-6"
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400"
                        required
                        pattern="[0-9]{10}"
                        title="Enter a valid 10-digit mobile number"
                    />
                    <input
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
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

                    {/* Custom Dropdown for Role */}
                    <div className="relative inline-block w-full">
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex justify-between items-center transition ${dropdownOpen ? "border-orange-400" : ""
                                }`}
                        >
                            <span className="text-gray-800">
                                {selectedRole || "Select your role"}
                            </span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${dropdownOpen ? "rotate-180" : ""
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
                                        className="px-4 py-2 cursor-pointer hover:bg-orange-100 hover:bg-opacity-50 transition"
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 cursor-pointer rounded-lg font-semibold text-lg text-orange-800 bg-gradient-to-r from-orange-500 to-yellow-600 shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-yellow-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                    >
                        Register
                    </button>
                    <div className="text-center mt-4">
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="cursor-pointer text-orange-600 hover:underline"
                            type="button"
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;