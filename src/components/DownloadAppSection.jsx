import { FaApple, FaGooglePlay } from "react-icons/fa";
import Logo from "../assets/imgs/doRituals.webp";

const DownloadAppSection = () => (
  <section className="mt-32 -mb-10 text-center relative z-10">
    <div className="container mx-auto max-w-5xl px-4">
      {/* The main card wrapper is now a "group" for hover effects */}
      <div className="relative z-10 bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100 transform -translate-y-16 items-center group">

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent inline-flex items-center gap-3">
            <span>Get the</span>
            <img
              src={Logo}
              alt="Do-Rituals Logo"
              // The image now has the group-hover class to rotate only itself
              className="h-10 sm:h-12 w-10 sm:w-12 object-contain group-hover:rotate-360 transition-transform duration-700 ease-in-out"
            />
            <span>Mobile App</span>
          </h2>
        </h2>
        <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
          Experience divine blessings at your fingertips. Download the
          Do-Rituals app for seamless bookings, live darshans, and much more.
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-8">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-inner mb-6 sm:mb-0 transform transition-transform hover:scale-105 duration-300">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://Do-Rituals.app/en"
              alt="Scan to download app"
              className="mx-auto"
            />
            <p className="mt-3 text-sm text-gray-600 font-medium">
              Scan QR to Download
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="flex items-center px-6 py-3 rounded-full bg-black text-white font-semibold hover:opacity-90 transition shadow-lg transform transition-transform hover:scale-105 duration-300"
            >
              <FaApple size={24} className="mr-3" />
              <div>
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 rounded-full bg-black text-white font-semibold hover:opacity-90 transition shadow-lg transform transition-transform hover:scale-105 duration-300"
            >
              <FaGooglePlay size={24} className="mr-3" />
              <div>
                <div className="text-xs opacity-75">GET IT ON</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DownloadAppSection;
