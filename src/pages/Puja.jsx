import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Assume these imports exist and are correct in your project
import SearchBox, { mockLocations } from "../components/SearchBox.jsx";
import { prasadItems } from "../store/prasaad.js";
import DecimalStarRating from "../utils/starRating.jsx";
import { popularPuja } from "../store/templeSampleData.js";
import { fetchCurrencyConversionInfo } from "../utils/detectCurrency.js";
import ScrollingBanner from "./ScrollingBanner.jsx";
import { pujaList } from "../store/puja.js";

const Puja = () => {
  const [selectedLocation, setSelectedLocation] = useState(mockLocations[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleClick = (puja) => {
    const pujaNameParam = puja.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/puja/${pujaNameParam}`, { state: { puja } });
  };

  const handleLocationChange = (location) => {
    console.log(`Parent: Location updated to: ${location}`);
    setSelectedLocation(location);
  };

  const handleSearchSubmit = () => {
    console.log(`Parent: SEARCH EXECUTED: Query='${searchQuery}', Location='${selectedLocation}'`);
  };

  const CARD_WIDTH = 260;
  const GAP = 24;

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: CARD_WIDTH + GAP,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -(CARD_WIDTH + GAP),
        behavior: "smooth",
      });
    }
  };

  const offersData = [
    "🌸 Get 15% off on Maha Rudrabhishek Puja 🌸",
    "🕉️ Book Satyanarayan Katha and save ₹501 instantly 🕉️",
    "🔥 Avail 10% discount on Navgraha Shanti Puja this month 🔥",
    "💫 Perform Lakshmi Puja and get a free Prasad pack worth ₹299 💫",
    "🌼 Book any two pujas together and get 20% off 🌼",
    "🙏 Early morning slot bookings get additional 5% off 🙏",
    "📿 Special 25% discount on personalized Sankalp Pujas 📿",
    "🎉 Group booking (5+ members) — Flat 15% off on all Pujas 🎉",
  ];

  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    // Assuming fetchCurrencyConversionInfo is a function that returns a Promise
    // fetchCurrencyConversionInfo().then(setCurrencyInfo);
  }, []);

  const parsePriceStringToNumber = (priceStr) => {
    if (!priceStr) return 0;
    const cleaned = priceStr.toString().replace(/[^\d.]/g, "");
    return parseFloat(cleaned) || 0;
  };

  const convertPrice = (priceINR) => {
    if (!currencyInfo) return `₹${priceINR.toFixed(2)}`;
    const convertedPrice = priceINR * currencyInfo.conversionRate;
    return `${currencyInfo.symbol}${convertedPrice.toFixed(2)}`;
  };

  const handleSelectPuja = (service) => {
    handleClick(service);
  };

  return (
    <div className="w-full overflow-x-hidden min-h-screen font-inter bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 to-yellow-200/0 pb-20">
      <section className="relative w-full flex flex-col items-center pb-20">
        <div className="relative z-20 w-full overflow-hidden bg-transparent backdrop-blur-md border-b border-white/20 py-3">
          <div className="flex animate-slide whitespace-nowrap rounded-xl p-4">
            {[...prasadItems, ...prasadItems].map(({ id, name, img, price }, idx) => (
              <div
                key={`${id}-${idx}`}
                className="inline-flex cursor-pointer items-center bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 mx-2 shadow hover:scale-110 focus-visible:outline focus-visible:outline-yellow-400 transition-transform duration-300 min-w-[120px]"
                tabIndex={0}
                role="button"
                aria-label={`Order ${name} priced ${price}`}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-10 rounded-md object-cover mr-2"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-black truncate">{name}</span>
                  <span className="text-[11px] text-yellow-600 font-bold">{price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
                        @keyframes slide {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-slide {
                            display: flex;
                            width: max-content;
                            animation: slide 25s linear infinite;
                        }
                        .animate-slide:hover {
                            animation-play-state: paused;
                        }
                    `}
        </style>

        <div className="w-full pt-5">
          <SearchBox
            locations={mockLocations}
            selectedLocation={selectedLocation}
            onLocationChange={handleLocationChange}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>
      </section>

      <section className="flex flex-col items-center h-auto w-full pb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
          Sacred Pujas
        </h2>

        <div className="flex items-center justify-center w-full gap-2 px-4">
          <button
            className="cursor-pointer p-2 rounded-full bg-white hover:bg-yellow-200 shadow disabled:opacity-40"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <FaChevronLeft className="text-orange-500" />
          </button>
          <div ref={carouselRef} className="relative w-full">
            <div className="cursor-pointer flex gap-6 pt-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full h-auto hide-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 snap-start px-4">
                {popularPuja.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 snap-center"
                    onClick={() => handleSelectPuja(service)}
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
                        <span className="text-xl sm:text-2xl font-bold text-orange-600">
                          {convertPrice(service.price)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <DecimalStarRating rating={service.rating} size={20} />
                        <span className="text-xs sm:text-sm text-gray-500">{service.bookings} booked</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(service);
                        }}
                        className="cursor-pointer mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base py-3 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                      >
                        <FaShoppingCart className="mr-2" /> Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer p-2 rounded-full bg-white hover:bg-yellow-200 shadow disabled:opacity-40"
            onClick={handleNext}
            aria-label="Next"
          >
            <FaChevronRight className="text-orange-500" />
          </button>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <ScrollingBanner offers={offersData} />
      </div>

      <section className="py-12 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-wide">
            Available Pujas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pujaList.map((puja, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                onClick={() => handleClick(puja)} // This line is now correct
              >
                <div className="relative overflow-hidden">
                  <img
                    src={puja.img}
                    alt={puja.name}
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{puja.name}</h3>
                  <div className="flex items-center justify-between text-sm sm:text-base text-gray-600">
                    <span className="font-medium text-gray-900">₹{puja.price}</span>
                    <div className="flex items-center space-x-1">
                      <DecimalStarRating rating={puja.rating} size={20} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: {puja.duration}</span>
                    <span>{puja.totalBookings}+ bookings</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(puja);
                    }}
                    className="cursor-pointer mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base py-3 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <FaShoppingCart className="mr-2" /> Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Puja;