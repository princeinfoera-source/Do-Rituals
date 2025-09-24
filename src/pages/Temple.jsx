import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaShoppingCart, FaChevronRight } from "react-icons/fa";
import { templeData } from "../store/templeSampleData";
import { prasadItems } from "../store/prasaad";
import { popularServices } from "../store/templeSampleData";
import DecimalStarRating from "../utils/starRating.jsx";
import { fetchCurrencyConversionInfo } from "../utils/detectCurrency.js";

const createSlug = (name) => name.replace(/\s+/g, "-").toLowerCase();

const TemplePage = () => {
  const location = useLocation();
  const { templeName } = useParams();
  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    fetchCurrencyConversionInfo().then(setCurrencyInfo);
  }, []);

  const temple =
    location.state?.temple || templeData.find((t) => createSlug(t.name) === templeName);

  if (!temple) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 text-gray-800 text-center p-6">
        <div className="max-w-md">
          <h1 className="text-6xl font-extrabold text-red-600 mb-6 drop-shadow-lg">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Temple Not Found</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The temple you are looking for does not exist or the link is invalid.
          </p>
          <a
            href="/"
            className="mt-6 inline-block bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 shadow-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const convertPrice = (priceINR) => {
    if (!currencyInfo) return "Loading...";
    const convertedPrice = priceINR * currencyInfo.conversionRate;
    return `${currencyInfo.symbol}${convertedPrice.toFixed(2)}`;
  };

  const images = temple.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 text-gray-800">


{/* Hero Section */}
<section
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center lg:items-stretch"
  style={{ backgroundImage: `url(${temple.img_src})` }}
  role="banner"
  aria-label={`Hero section for ${temple.name}`}
>
  <div className="absolute inset-0 bg-black/50 lg:bg-black/40" aria-hidden="true" />

  {/* Left Temple Info */}
  <div className="relative z-10 flex flex-col justify-center p-4 sm:p-6 lg:p-10 text-white w-full lg:w-[50vw] max-w-full">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
      {temple.name}
    </h1>
    <div className="relative mb-4 sm:mb-6 after:absolute after:-bottom-1 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-yellow-500 after:rounded-full after:shadow-lg" />
    <address className="text-amber-100 text-sm sm:text-base lg:text-lg mb-2 not-italic">
      {temple.address}
    </address>
    <div className="flex items-center gap-2 sm:gap-3 text-amber-200 text-xs sm:text-sm">
      <FaMapMarkerAlt className="text-orange-400" aria-hidden="true" />
      <span>{temple.location || "Sacred Grounds"}</span>
    </div>
  </div>

  {/* Right Prasad Section */}
  <div className="relative z-10 flex justify-end p-4 sm:p-6 lg:p-10 lg:mt-0 w-full lg:w-[50vw]">
    <div className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 w-full h-auto mt-12">
      <div className="grid grid-cols-2 gap-3">
        {prasadItems.slice(0, 6).map(({ id, name, img, description, price }) => (
          <article
            key={id}
            className="group cursor-pointer relative bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300"
            role="article"
            aria-label={`${name} prasad`}
          >
            <div className="relative">
              <img
                src={img}
                alt={`${name} - ${description.substring(0, 50)}...`}
                className="w-full h-20 object-cover group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow">
                Sacred
              </div>
            </div>
            <div className="p-2 sm:p-2.5">
              <h3 className="text-gray-900 font-semibold text-sm flex justify-between items-center mb-1">
                <span className="truncate">{name}</span>
                <span className="text-orange-500 font-bold">{price}</span>
              </h3>
              <p className="text-gray-800 text-xs line-clamp-2 mb-2">
                {description}
              </p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-xs py-1 rounded-lg shadow hover:from-orange-600 hover:to-yellow-600 transition">
                Order Prasad
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>





      {/* Popular Services Section */}
      <section className="relative py-16 px-4 sm:px-6 bg-transparent z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Popular
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 truncate">{service.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">{convertPrice(service.price)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <DecimalStarRating rating={service.rating} size={20} />
                    <span className="text-xs sm:text-sm text-gray-500">{service.bookings} booked</span>
                  </div>
                  <button className="cursor-pointer mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base py-3 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                    <FaShoppingCart className="mr-2" /> Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <a href="/temples" className="text-orange-600 hover:text-orange-800 font-semibold flex items-center">
              View All <FaChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-800 border-b-4 border-yellow-500 pb-3 inline-block">
              About the Temple
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">{temple.description}</p>
          </div>
          <div className="flex-1">
            <img
              src={temple.images[0]}
              alt={temple.name}
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {images.length > 0 && (
        <section className="w-full py-10 px-4 sm:px-6 bg-gradient-to-br from-yellow-100 to-amber-200">
          <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-12">
            Temple Gallery
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[currentIndex]}
                alt={`Temple image ${currentIndex + 1}`}
                className="w-full h-[480px] object-cover rounded-2xl transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Temple thumbnail ${idx + 1}`}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-transform duration-300 ${
                    idx === currentIndex ? "scale-105 shadow-lg border-4 border-yellow-400" : "opacity-70"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {temple.services && temple.services.length > 0 && (
        <section className="w-full py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-yellow-800 mb-12 text-center">
              Services Available
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {temple.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-yellow-700 font-bold text-2xl mb-2">₹{service.price}</p>
                  <p className="text-gray-700 text-sm mb-4">
                    {service.description || "A divine ritual to bring blessings."}
                  </p>
                  <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-3 rounded-xl shadow-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      {temple.map_src && (
        <section className="w-full h-[450px]">
          <iframe
            title={`${temple.name} Map`}
            src={temple.map_src}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      )}
    </div>
  );
};

export default TemplePage;
