import { useState } from "react";
import Logo from "../assets/imgs/doRituals.webp";
import Signup from "./Signup";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [isPriest, setIsPriest] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const loginType = isPriest ? "Priest" : "User";
    console.log(
      `Login attempted as ${loginType} with email: ${email} and password: ${password}`
    );
    localStorage.setItem("role", role);

    navigate(`/dashboard/${role}`);
  };

  const onGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success: ", credentialResponse);
    // Handle credentialResponse here (send to backend or authenticate client side)
  };

  const onGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div>
      {!showSignup ? (
        <>
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Do-Rituals Logo" className="h-15 mb-4" />
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              Login
            </h2>
          </div>
          <div className="flex bg-gray-200 rounded-full p-1 mb-6">
            <button
              type="button"
              onClick={() => setIsPriest(false)}
              className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${!isPriest
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:bg-white/50"
                }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setIsPriest(true)}
              className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${isPriest
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:bg-white/50"
                }`}
            >
              Priest
            </button>
          </div>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
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
              Login
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <GoogleLogin
              onSuccess={onGoogleSuccess}
              onError={onGoogleError}
              size="medium"
              shape="pill"
              text="signin_with"
            />
          </div>
          <div className="text-center mt-6">
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
  );
};

export default Login;
