import Logo from "../assets/imgs/doRituals.webp";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFax,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./layoutsStyle.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleUserLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handlePriestLoginClick = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <footer className="bg-amber-50 text-gray-800 py-8 pt-6 border-t border-amber-200 w-full px-4 sm:px-6 lg:px-[5%]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8">
        {/* Brand & Description Column */}
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4 justify-center sm:justify-start">
            <img
              src={Logo}
              alt="Do-Rituals Logo"
              className="h-24 w-24 object-contain max-w-full"
            />
          </div>
          <p className="text-sm text-yellow-800 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Your spiritual companion for a divine experience. We're dedicated to
            making authentic rituals accessible to everyone, everywhere.
          </p>
          <h4 className="font-semibold mt-8 mb-4 uppercase tracking-wide text-yellow-600 text-center sm:text-left">
            Follow Us
          </h4>
          <div className="flex justify-center sm:justify-start space-x-5">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-500 hover:text-yellow-700 transition-colors"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-500 hover:text-yellow-700 transition-colors"
            >
              <FaTwitter className="w-7 h-7" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-500 hover:text-yellow-700 transition-colors"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-yellow-700 transition-colors"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Quick Links + Legal Column */}
        <div className="flex flex-col h-full text-center sm:text-left">
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-yellow-600">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm mb-6">
            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/user-login"
                onClick={handleUserLoginClick}
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300 cursor-pointer"
              >
                <u>User Login</u>
              </a>
            </li>
            <li>
              <a
                href="/priest-login"
                onClick={handlePriestLoginClick}
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300 cursor-pointer"
              >
                <u>Priest Login</u>
              </a>
            </li>
          </ul>
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-yellow-600">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/privacy"
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details Column */}
        <div className="flex flex-col h-full text-center sm:text-left">
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-yellow-600">
            Contact Details
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-center sm:justify-start">
              <FaPhoneAlt className="mr-2 text-yellow-600 flex-shrink-0" />
              <a
                href="tel:+1234567890"
                className="hover:text-yellow-700 transition-colors"
              >
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FaFax className="mr-2 text-yellow-600 flex-shrink-0" />
              <a
                href="tel:+1123456789"
                className="hover:text-yellow-700 transition-colors"
              >
                +1 123 456 789 (Fax)
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FaEnvelope className="mr-2 text-yellow-600 flex-shrink-0" />
              <a
                href="mailto:info@dorituals.com"
                className="hover:text-yellow-700 transition-colors break-all"
              >
                info@dorituals.com
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FaEnvelope className="mr-2 text-yellow-600 flex-shrink-0" />
              <a
                href="mailto:support@dorituals.com"
                className="hover:text-yellow-700 transition-colors break-all"
              >
                support@dorituals.com
              </a>
            </li>
            <li className="flex items-start justify-center sm:justify-start">
              <FaMapMarkerAlt className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
              <span>
                123 Divine Path, Spiritual Heights, <br /> City of Blessings,
                12345
              </span>
            </li>
            <li className="flex items-start justify-center sm:justify-start">
              <FaClock className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
              <span>
                Mon - Fri: 9 AM - 5 PM <br /> Sat - Sun: Closed
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column - smaller and compact */}
        <div className="flex flex-col justify-between h-full max-w-xs mx-auto sm:mx-0 text-center sm:text-left">
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-yellow-600">
            Join Our Newsletter
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Stay connected for spiritual insights and exclusive offers. Receive
            uplifting messages, meditations, and rituals to nurture your soul.
            Discover tips and wisdom to enhance your journey daily. Be the first
            to hear about events, workshops, and gatherings. Enjoy exclusive
            discounts on rituals and products for your growth.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-amber-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold text-sm transition-transform duration-200 hover:scale-105 hover:from-orange-500 hover:to-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-amber-200 pt-6 px-6">
        © 2025 Do-Rituals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;