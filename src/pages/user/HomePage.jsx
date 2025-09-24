import React, { useState, useEffect, useRef } from "react";
import HomePageImg from "../../assets/imgs/HomePageImg.png";
import DownloadAppSection from "../../components/DownloadAppSection.jsx";
import TempleCard from "../../components/TempleCard.jsx";
import Button from "../../components/ExploreAnimatedButton.jsx";
import { testimonials, templesData, servicesData, donationData } from "../../store/templeSampleData.js";
import "../style.css";
import ScrollingBanner from "./ScrollingBanner.jsx";
import { fetchCurrencyConversionInfo } from "../../utils/detectCurrency.js";
import DecimalStarRating from "../../utils/starRating.jsx";
// import MahaRudrabhishek from "../../assets/imgs/temp/Maha Rudrabhishek.jpeg";
// import SundarkandPath from "../../assets/imgs/temp/Sundarkand Path.jpeg"
// import GrahShantiPuja from "../../assets/imgs/temp/Grah Shanti Puja.jpeg";
// import SatyanarayanKatha from "../../assets/imgs/temp/Satyanarayan Katha.jpeg";
import {prasadItems} from "../../store/prasaad.js";
import {popularServices} from "../../store/templeSampleData.js"


const CARD_WIDTH = 260; // px
const VISIBLE_CARDS = 5; // Number of cards visible at a time
const GAP = 24; // gap between cards

import {
  FaStar,
  FaShoppingCart,
  FaRupeeSign,
  FaClock,
  FaHeadset,
  FaShieldAlt,
  FaTruck,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-4xl text-orange-600 mb-4" />,
    title: "Verified & Authentic",
    description:
      "All our priests and temples are thoroughly verified to ensure authentic spiritual experiences.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-orange-600 mb-4" />,
    title: "Easy Booking",
    description:
      "Book pujas and services with our simple, secure checkout process in just a few clicks.",
  },
  {
    icon: <FaTruck className="text-4xl text-orange-600 mb-4" />,
    title: "Prasad Delivery",
    description:
      "Get sacred prasad delivered to your doorstep with our reliable delivery network.",
  },
  {
    icon: <FaRupeeSign className="text-4xl text-orange-600 mb-4" />,
    title: "Transparent Pricing",
    description:
      "No hidden costs. Clear pricing for all services with multiple payment options.",
  },
  {
    icon: <FaClock className="text-4xl text-orange-600 mb-4" />,
    title: "Quick Service",
    description:
      "Most pujas are performed within 24 hours of booking with live updates.",
  },
  {
    icon: <FaHeadset className="text-4xl text-orange-600 mb-4" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available round the clock to assist you.",
  },
];

// const popularServices = [
//   {
//     name: "Maha Rudrabhishek",
//     price: 1251,
//     originalPrice: "₹1,500",
//     rating: 4.9,
//     bookings: "1.2k+",
//     image: MahaRudrabhishek,
//   },
//   {
//     name: "Sundarkand Path",
//     price: 751,
//     originalPrice: "900",
//     rating: 4.8,
//     bookings: "980+",
//     image: SundarkandPath,
//   },
//   {
//     name: "Grah Shanti Puja",
//     price: 2100,
//     originalPrice: "₹2,500",
//     rating: 4.7,
//     bookings: "850+",
//     image: GrahShantiPuja,
//   },
//   {
//     name: "Satyanarayan Katha",
//     price: 1100,
//     originalPrice: "₹1,350",
//     rating: 4.9,
//     bookings: "1.5k+",
//     image: SatyanarayanKatha,
//   },
// ];

const offersData = [
  "🪷 Free Prasad Delivery on orders above ₹999 🪷",
  "⭐ Get 10% off on your first booking ⭐",
  "🔔 Special discounts for senior citizens 🔔",
  "📱 Download our app for exclusive offers 📱",
];

const parsePriceStringToNumber = (priceStr) => {
  if (!priceStr) return 0;
  return Number(priceStr.replace(/[^0-9.-]+/g, ""));
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    fetchCurrencyConversionInfo().then(setCurrencyInfo);
  }, []);

  const [startIndex, setStartIndex] = useState(0);

  const maxStart = Math.max(prasadItems.length - VISIBLE_CARDS, 0);

  const carouselRef = useRef(null);

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

  const visibleItems = prasadItems.slice(startIndex, startIndex + VISIBLE_CARDS);

  const convertPrice = (priceINR) => {
    if (!currencyInfo) return "Loading...";
    const convertedPrice = priceINR * currencyInfo.conversionRate;
    return `${currencyInfo.symbol}${convertedPrice.toFixed(2)}`;
  };

  const convertOriginalPrice = (originalPriceStr) => {
    const numPrice = parsePriceStringToNumber(originalPriceStr);
    return convertPrice(numPrice);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${HomePageImg})`,
        }}
      >
        <div className="relative max-w-4xl mx-auto -mt-40 mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
            Divine Services, Delivered to You
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp">
            Book authentic temple pujas, get prasad delivered, and experience spiritual services from trusted temples across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInScale">
            <Button href="/services" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg">
              Browse Services
            </Button>
            <Button href="/temples" className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg border border-orange-600">
              Explore Temples
            </Button>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:max-w-[600px]">
            <input
              type="search"
              placeholder="Temple name / Place / Jyotirling / Popular Pooja"
              class="flex-1 px-6 py-3 rounded-full border border-gray-300 shadow-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-w-0"
            />
            <button
              type="button"
              class="cursor-pointer px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </div>



        {/* Scrolling Banner on top */}
        <div className="fixed bottom-0 left-0 w-full z-50">
          <ScrollingBanner offers={offersData} />
        </div>

      </section>

      {/* Popular Services Section (overlapping Hero from ~60vh) */}
      <section
        className="relative mt-96 py-16 px-6 bg-transparent z-10"
        style={{ marginTop: "-30vh" }} // overlaps hero nicely
      >
        <div className="container mx-auto">
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden border border-gray-200 relative z-0
             hover:border-orange-500 hover:shadow-2xl hover:scale-105
             transition-transform transition-shadow duration-300 ease-in-out"
              >
                {/* Image section */}
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

                {/* Card content */}
                <div className="p-5 flex flex-col gap-2">
                  {/* Service Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 truncate">{service.name}</h3>

                  {/* Prices */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">{convertPrice(service.price)}</span>
                    <span className="text-sm sm:text-base text-gray-400 line-through">{convertOriginalPrice(service.originalPrice)}</span>
                  </div>

                  {/* Rating & Bookings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DecimalStarRating rating={service.rating} size={20} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">{service.bookings} booked</span>
                  </div>

                  {/* Book Now Button */}
                  <button className="cursor-pointer mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base py-3 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                    <FaShoppingCart className="mr-2" /> Book Now
                  </button>
                </div>
              </div>

            ))}
          </div>

          {/* "View All" link below the cards */}
          <div className="flex justify-end mt-6">
            <a href="/temples" className="text-orange-600 hover:text-orange-800 font-semibold flex items-center">
              View All <FaChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center h-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
          Sacred Prasad
        </h2>

        <div className="flex items-center justify-center w-full gap-2">
          {/* Left arrow */}
          <button
            className="cursor-pointer p-2 rounded-full bg-white hover:bg-yellow-200 shadow disabled:opacity-40"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <FaChevronLeft className="text-orange-500" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="cursor-pointer flex gap-6 pt-5 overflow-x-auto overflow-y-clip scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar w-full h-auto"
          >
            {prasadItems.map(({ id, name, img, description, price }) => (
              <article
                key={id}
                className="group min-w-[240px] h-auto max-w-[280px] flex-shrink-0 snap-start bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-orange-400/50 transition-all duration-500 ease-out bg-gradient-to-br from-white/20 to-transparent relative"
              >
                <div className="relative">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-48 object-cover group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sacred
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="flex justify-between items-center text-gray-900/95 font-semibold text-base mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                    <span className="truncate">{name}</span>
                    <span className="text-orange-600 font-bold ml-2 flex-shrink-0">{price}</span>
                  </h3>

                  <p className="text-gray-800/90 text-sm line-clamp-3 leading-relaxed mb-2">
                    {description}
                  </p>

                  <button className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-1.5 px-3 rounded-lg text-sm shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                    Order Prasad
                  </button>
                </div>
              </article>
            ))}

          </div>


          {/* Right arrow */}
          <button
            className="cursor-pointer p-2 rounded-full bg-white hover:bg-yellow-200 shadow disabled:opacity-40"
            onClick={handleNext}
            aria-label="Next"
          >
            <FaChevronRight className="text-orange-500" />
          </button>
        </div>
      </section>


      {/* Featured Temples Section */}
      <section className="mt-12 relative py-0 px-6 bg-gray-50">
        <div className="text-center container mx-auto">
          {/* Section title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
            Featured Temples
          </h2>


          {/* Grid of temples */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {templesData.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <img src={t.image} alt={t.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{t.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t.address}</p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{t.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <DecimalStarRating rating={t.rating} size={20} />
                    </div>
                    <span className="text-sm text-orange-600 font-semibold">{t.poojaType}</span>
                  </div>
                  <button className="cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    View Services
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "View All" link below the grid */}
          <div className="flex justify-end mt-6">
            <a href="/temples" className="text-orange-600 hover:text-orange-800 font-semibold flex items-center">
              View All <FaChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative py-0 px-6 mt-10 bg-white">
        <div className="container mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
            How It Works
          </h2>

          <p className="text-center m-auto text-gray-600 mb-12 max-w-2xl">
            Booking divine services has never been easier. Follow these simple steps to fulfill your spiritual needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-xl mb-3">Browse & Select</h3>
              <p className="text-gray-600">Explore our catalog of pujas and services from verified temples.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-xl mb-3">Book & Pay</h3>
              <p className="text-gray-600">Select your preferred date and make a secure payment online.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-xl mb-3">Receive Confirmation</h3>
              <p className="text-gray-600">Get booking confirmation, live updates, and prasad delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-10 py-0 px-6 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="text-center container">

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
            Why Choose Us
          </h2>
          <p className="text-center m-auto text-gray-600 mb-12 max-w-2xl">
            We combine traditional spiritual values with modern convenience for a seamless experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10 py-0 px-6 bg-white">
        <div className="text-center container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
            Customer Experiences
          </h2>
          <p className="text-center m-auto text-gray-600 mb-12 max-w-2xl">
            See what our customers have to say about their experience with our services.
          </p>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full md:w-1/2 px-4">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={goToPrevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-20"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-20"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-0 px-6 bg-orange-600 mt-10 mb-5 py-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Book Your Puja?
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of devotees who have experienced divine services through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg">
              Browse Services
            </Button>
            <Button href="/contact" className="bg-transparent hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg border border-white">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <DownloadAppSection />
    </>
  );
};

export default HomePage;