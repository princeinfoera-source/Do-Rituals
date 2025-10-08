import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaShoppingCart, FaChevronRight } from "react-icons/fa";
import { templeData, popularPuja } from "../../../store/templeSampleData.js";
import DecimalStarRating from "../../../utils/starRating.jsx";
import { fetchCurrencyConversionInfo } from "../../../utils/detectCurrency.js";
import templeMap from "../../../assets/imgs/templeMap.webp"
import ScrollingTopMarquee from "../../../components/ScrollingTopMarquee.jsx";


const Temples = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { templeName } = useParams();
  const [filter, setFilter] = useState("ALL");

  const filterCity = [
    { name: "ALL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Ayodhya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Varanasi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Prayagraj", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Haridwar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Mathura", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Vrindavan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Ujjain", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Kedarnath", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
    { name: "Badrinath", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqLoLa_l-E5RUWJe_bafGcUsgGxmZUzilOA&s" },
  ];


  const temple = templeData.find(
    (t) => t.name.replace(/\s+/g, "-").toLowerCase() === templeName
  );

  const [currencyInfo, setCurrencyInfo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchCurrencyConversionInfo().then(setCurrencyInfo);
  }, []);

  const convertPrice = (priceINR) => {
    if (!currencyInfo) return "Loading...";
    const convertedPrice = priceINR * currencyInfo.conversionRate;
    return `${currencyInfo.symbol}${convertedPrice.toFixed(2)}`;
  };

  const images = temple?.images || [];

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Navigate to clicked temple detail
  const handleTempleClick = (temple) => {
    navigate(`/temples/${temple.name.replace(/\s+/g, "-").toLowerCase()}`, {
      state: { temple: temple },
    });
  };

  return (
    <div className="overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col inset-0 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 to-yellow-200/0">

        <ScrollingTopMarquee pujaData={popularPuja} />

        {/* Hero Text + Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-6 lg:py-12 gap-10">
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Divine Services, Delivered to You
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Experience the blessings of sacred rituals, prasad, and pujas
              from the holiest cities of India — delivered with devotion and
              care, right to your doorstep.
            </p>
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-lg transition">
              Book a Puja Now
            </button>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img
              src={templeMap}
              alt="Hero"
              className="rounded-2xl shadow-lg object-fit max-h-[400px] w-full lg:w-auto"
            />
          </div>
        </div>

        {/* Filter Buttons (scroll on mobile) */}
        <div className="flex gap-4 px-5 overflow-x-auto no-scrollbar lg:flex-wrap lg:justify-center">
          {filterCity.map((city) => (
            <button
              key={city.name}
              onClick={() => setFilter(city.name)}
              className={`flex flex-col items-center px-4 py-2 rounded-xl transition border flex-shrink-0 cursor-pointer
          ${filter === city.name
                  ? "bg-yellow-400 text-gray-900 font-bold border-yellow-500 shadow-md"
                  : "bg-white/40 text-gray-800 hover:bg-yellow-300 hover:text-black border-yellow-200"
                }`}
              aria-pressed={filter === city.name}
            >
              <img
                className="h-12 w-12 rounded-lg mb-2 object-fit shadow-sm"
                src={city.img}
                alt={city.name}
              />
              <span className="text-sm">{city.name}</span>
            </button>
          ))}
        </div>

        <hr className="border-t border-yellow-400 mt-6 mx-5 opacity-70" />
      </section>

      {/* List of Temples Section (Added) */}
      <section className="w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {templeData.map((temple, index) => (
              <button
                key={index}
                onClick={() => handleTempleClick(temple)}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer flex flex-col items-center"
              >
                <img
                  src={temple.images?.[0]}
                  alt={temple.name}
                  className="w-full h-40 object-fit rounded-lg mb-4"
                />
                <span className="text-lg font-semibold text-gray-900 truncate text-center">
                  {temple.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="relative py-16 px-4 sm:px-6 bg-transparent z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Popular Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPuja.map((service, idx) => (
              <div
                key={idx}
                className="bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-52 object-fit rounded-t-2xl transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Popular
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 truncate">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">
                      {convertPrice(service.price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <DecimalStarRating rating={service.rating} size={20} />
                    <span className="text-xs sm:text-sm text-gray-500">
                      {service.bookings} booked
                    </span>
                  </div>
                  <Link
                    to="/puja"
                    className="cursor-pointer mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base py-3 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <FaShoppingCart className="mr-2" /> Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <a
              href="/temples"
              className="text-orange-600 hover:text-orange-800 font-semibold flex items-center"
            >
              View All <FaChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      {temple && (
        <section className="w-full py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-800 border-b-4 border-yellow-500 pb-3 inline-block">
                About the Temple
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                {temple.description}
              </p>
            </div>
            <div className="flex-1">
              <img
                src={temple.images?.[0]}
                alt={temple.name}
                className="rounded-2xl shadow-2xl w-full h-80 object-fit"
              />
            </div>
          </div>
        </section>
      )}

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
                className="w-full h-[480px] object-fit rounded-2xl transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Temple thumbnail ${idx + 1}`}
                  className={`w-24 h-24 object-fit rounded-lg cursor-pointer flex-shrink-0 transition-transform duration-300 ${idx === currentIndex
                    ? "scale-105 shadow-lg border-4 border-yellow-400"
                    : "opacity-70"
                    }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {temple?.services?.length > 0 && (
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-yellow-700 font-bold text-2xl mb-2">
                    ₹{service.price}
                  </p>
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
      {temple?.map_src && (
        <section className="w-full h-[450px]">
          <iframe
            title={`${temple?.name} Map`}
            src={temple.map_src}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </section>
      )}
    </div>
  );
};

export default Temples;
