import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/imgs/doRituals.webp";
import Signup from "./Signup";
import { GoogleLogin } from "@react-oauth/google";
import bg from "../assets/imgs/temp/Baidyanath Dham.jpg";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const role = "User";
    console.log(`Login attempted as ${role} with email: ${email}`);
    localStorage.setItem("role", role);
    navigate(`/dashboard/${role}`);
  };

  const onGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    // Handle Google credentials here
    localStorage.setItem("role", "User");
    navigate("/dashboard/User");
  };

  const onGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div
      className="min-h-screen max-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 183, 77, 0.7), rgba(255, 138, 101, 0.7)), url(${bg})`
      }}
    >
      <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl bg-white rounded-lg shadow-lg p-8">
        {!showSignup ? (
          <>
            <div className="flex flex-col items-center">
              <img src={Logo} alt="Do-Rituals Logo" className="h-20 mb-6" />
              <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                Login
              </h2>
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white placeholder-gray-400 text-gray-800"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white placeholder-gray-400 text-gray-800"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-lg text-white bg-gradient-to-r from-orange-500 to-yellow-600 shadow-lg transition-all cursor-pointer duration-300 hover:from-orange-600 hover:to-yellow-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>
            <div className="flex justify-center mt-6">
              <GoogleLogin
                onSuccess={onGoogleSuccess}
                onError={onGoogleError}
                size="medium"
                shape="pill"
                text="signin_with"
              />
            </div>
            <div className="text-center mt-8">
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setShowSignup(true)}
                  className="text-yellow-600 hover:underline cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </>
        ) : (
          <Signup
            onSwitchToLogin={() => setShowSignup(false)}
            onSignup={(data) => console.log("Signup data", data)}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
