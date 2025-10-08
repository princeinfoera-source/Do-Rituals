import { useState, useEffect, useRef } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaShoppingCart, FaChevronRight } from "react-icons/fa";
import { templeData } from "../../../store/templeSampleData.js";
import { prasadItems } from "../../../store/prasaad.js";
import { popularPuja } from "../../../store/templeSampleData.js";
import DecimalStarRating from "../../../utils/starRating.jsx";
import { fetchCurrencyConversionInfo } from "../../../utils/detectCurrency.js";
import ImgGallery from "../../../components/ImgGallery.jsx";
import ViewAllBtn from "../../../components/ViewAllBtn.jsx";
import ScrollingTopMarquee from "../../../components/ScrollingTopMarquee.jsx";

const createSlug = (name) => name.replace(/\s+/g, "-").toLowerCase();

const TempleDetailPage = () => {
  const location = useLocation();
  const { templeName } = useParams();
  const navigate = useNavigate();
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
  const descRef = useRef(null);
  const targetRef = useRef(null); // reference to the TempleDescription section
  const [showReadMore, setShowReadMore] = useState(false);
  const [truncatedDesc, setTruncatedDesc] = useState("");

  const MAX_LENGTH = 200; // max chars before showing Read More

  useEffect(() => {
    if (temple.description && temple.description.length > MAX_LENGTH) {
      setTruncatedDesc(temple.description.slice(0, MAX_LENGTH) + "...");
      setShowReadMore(true);
    } else {
      setTruncatedDesc(temple.description);
      setShowReadMore(false);
    }
  }, [temple.description]);

  const handleReadMore = () => {
    const targetEl = document.querySelector(".TempleDescription");
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClickPuja = (puja) => {
    const pujaNameParam = puja.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/puja/${pujaNameParam}`, { state: { puja } });
  };

  const handleSelectPuja = (service) => {
    handleClick(service);
  };

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 text-gray-800 items-center">

      {/* hero section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${temple.img_src})` }}
        role="banner"
        aria-label={`Hero section showcasing ${temple.name} temple`}
      >
        <div className="absolute inset-0 bg-black/60 lg:bg-black/50" aria-hidden="true" />

        <ScrollingTopMarquee pujaData={prasadItems} />

        <div className="relative z-10 w-full py-12 flex flex-row items-start justify-between mx-auto px-16 gap-20">
          <div className="max-w-2xl space-y-4 text-white drop-shadow-lg text-left my-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
              {temple.name}
            </h2>
            <address className="text-amber-200 text-sm sm:text-base not-italic">
              {temple.address}
            </address>
            <div className="flex items-center gap-2 text-amber-200 text-xs sm:text-sm">
              <FaMapMarkerAlt className="text-orange-400" aria-hidden="true" />
              <span>{temple.location || "Sacred Grounds"}</span>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg text-white text-sm sm:text-base leading-relaxed space-y-5">
            <u>
              <h2 className="text-lg sm:text-xl font-bold text-yellow-300 mb-3">
                About this Temple
              </h2>
            </u>
            <p ref={descRef}>{truncatedDesc || "This sacred temple stands as a beacon of faith..."}</p>
            <p>Hindu temples in India are more than places of worship...</p>
            <p>The temple is often viewed as the abode of the divine...</p>

            {showReadMore && (
              <button
                onClick={handleReadMore}
                className="mt-2 cursor-pointer text-yellow-300 underline hover:text-yellow-400 transition-colors"
              >
                Read More
              </button>
            )}
          </div>
        </div>



      </section>

      {/* Popular Services Section */}
      <section className="relative py-16 px-4 sm:px-6 bg-transparent z-10 -mt-[40vh] md:-mt-[40vh] sm:-mt-[40vh]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="cursor-pointer flex gap-6 pt-5 overflow-x-auto w-full h-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 snap-start px-4">
              {popularPuja.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-shadow duration-300 snap-center"
                  onClick={() => handleSelectPuja(service)}
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
                        handleClickPuja(service);
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
          <div className="flex justify-end mt-6">
            <Link
              to="/puja"
              className="var-font-group flex items-center text-orange-400 hover:text-orange-400"
            >
              <ViewAllBtn text="View All" />
            </Link>
          </div>
        </div>
      </section>

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
                  <p className="text-yellow-700 font-bold text-2xl mb-2">{service.price}</p>
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


      <ImgGallery images={images} />



      {/* About Section */}
      <section className="TempleDescription w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-800 border-b-4 border-yellow-500 pb-3 inline-block">
              About the Temple
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">{temple.description}</p>
          </div>
          {/* <div className="flex-1">
            <img
              src={temple.images[0]}
              alt={temple.name}
              className="rounded-2xl shadow-2xl w-full h-80 object-fit"
            />
          </div> */}
        </div>
      </section>

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

export default TempleDetailPage;
