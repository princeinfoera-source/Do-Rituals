import React, { useState } from "react";
import Logo from "../assets/imgs/doRituals.webp";
import { GoogleLogin } from "@react-oauth/google";

const Signup = ({ onSignup, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Signup attempted as User with email: ${email} and password: ${password}`
    );
    if (onSignup) {
      onSignup({ email, password, type: "User" });
    }
  };

  const onGoogleSuccess = (credentialResponse) => {
    console.log("Google Signup Success: ", credentialResponse);
    if (onSignup) {
      onSignup({
        type: "User",
        method: "Google",
        data: credentialResponse,
      });
    }
  };

  const onGoogleError = () => {
    console.log("Google Signup Login Failed");
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Do-Rituals Logo" className="h-15 mb-4" />
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Email"
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
          className="w-full py-3 rounded-lg font-semibold text-lg text-white bg-gradient-to-r from-orange-500 to-yellow-600 shadow-lg transition-all cursor-pointer duration-300 hover:from-orange-600 hover:to-yellow-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </form>

      <div className="flex justify-center mt-4">
        <GoogleLogin
          onSuccess={onGoogleSuccess}
          onError={onGoogleError}
          size="medium"
          shape="pill"
          text="signup_with"
        />
      </div>

      <div className="text-center mt-6">
        <p>
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-yellow-600 hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
