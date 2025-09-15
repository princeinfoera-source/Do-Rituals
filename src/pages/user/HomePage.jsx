import React, { useState, useEffect } from "react";
import HomePageImg from "../../assets/imgs/HomePageImg.png";
import DownloadAppSection from "../../components/DownloadAppSection.jsx";
import TempleCard from "../../components/TempleCard.jsx";
import Button from "../../components/ExploreAnimatedButton.jsx";
import { testimonials, templesData, servicesData, donationData } from "../../store/templeSampleData.js";
import "../style.css";
import ScrollingBanner from "./ScrollingBanner.jsx";

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

const popularServices = [
  {
    name: "Maha Rudrabhishek",
    price: "₹1,251",
    originalPrice: "₹1,500",
    rating: 4.9,
    bookings: "1.2k+",
    image: "https://placehold.co/300x200/FFE4C4/000?text=Maha+Rudrabhishek",
  },
  {
    name: "Sundarkand Path",
    price: "₹751",
    originalPrice: "₹900",
    rating: 4.8,
    bookings: "980+",
    image: "https://placehold.co/300x200/E6E6FA/000?text=Sundarkand+Path",
  },
  {
    name: "Grah Shanti Puja",
    price: "₹2,100",
    originalPrice: "₹2,500",
    rating: 4.7,
    bookings: "850+",
    image: "https://placehold.co/300x200/FFF8E1/000?text=Grah+Shanti+Puja",
  },
  {
    name: "Satyanarayan Katha",
    price: "₹1,100",
    originalPrice: "₹1,350",
    rating: 4.9,
    bookings: "1.5k+",
    image: "https://placehold.co/300x200/F0FFF0/000?text=Satyanarayan+Katha",
  },
];
  
const offers = [
  "Flat 25% OFF on Maha Rudrabhishek",
  "Get Free Prasad Delivery for orders above ₹1000",
  "Book Sundarkand Path and Save 15%",
  "Limited Time Offer: Satyanarayan Katha at ₹1100 only",
  "Exclusive: Grah Shanti Puja with live updates",
  "Special Discount on Temple Merchandise",
];


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      {/* Hero Section with E-commerce Feel */}
<section
  className="relative h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${HomePageImg})`,
  }}
>
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
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

  {/* Place ScrollingBanner here at the end of section */}
  <div className="absolute bottom-0 left-0 w-full z-10">
  <ScrollingBanner />
</div>


</section>


      <div className="bg-gradient-to-b from-white via-orange-50 via-60% via-yellow-50 to-white">
        {/* Popular Services Section */}
        <section className="EComm relative py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Popular Services
              </h2>
              <a href="/services" className="text-orange-600 hover:text-orange-800 font-semibold flex items-center">
                View All <FaChevronRight className="ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative">
                    <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Popular
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`text-yellow-400 ${i < Math.floor(service.rating) ? "fill-current" : "text-gray-300"}`} />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">({service.rating})</span>
                      </div>
                      <span className="text-sm text-gray-600">{service.bookings} booked</span>
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <FaShoppingCart className="mr-2" /> Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Temples Section */}
        <section className="relative py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Featured Temples
              </h2>
              <a href="/temples" className="text-orange-600 hover:text-orange-800 font-semibold flex items-center">
                View All <FaChevronRight className="ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templesData.map((t) => (
                <div key={t.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img src={t.image} alt={t.name} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">{t.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{t.address}</p>
                    <p className="text-gray-700 mb-4 line-clamp-2">{t.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 fill-current" />
                        <span className="ml-1 font-semibold">{t.rating}</span>
                      </div>
                      <span className="text-sm text-orange-600 font-semibold">{t.poojaType}</span>
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                      View Services
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="relative py-16 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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

            <div className="text-center">
              <Button href="/services" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg">
                Explore All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Customer Experiences
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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
        <section className="py-16 px-6 bg-orange-600">
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
      </div>
    </>
  );
};

export default HomePage;