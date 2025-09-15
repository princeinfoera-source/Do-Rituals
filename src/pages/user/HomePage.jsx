import React, { useState } from "react";
import HomePageImg from "../../assets/imgs/HomePageImg.png";
import DownloadAppSection from "../../components/DownloadAppSection.jsx";
import TempleCard from "../../components/TempleCard.jsx";
import Button from "../../components/ExploreAnimatedButton.jsx";

import {
  FaStar,
  FaHandshake,
  FaOm,
  FaGlobe,
  FaBook,
  FaHeart,
  FaRegLightbulb,
  FaPrayingHands,
  FaTree,
  FaUsers,
  FaLandmark,
  FaSeedling,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaHandsHelping,
} from "react-icons/fa";
import kashiTemnple from "../../assets/imgs/temp/Kashi Vishwanath Temple.jpg";
import meenakshiTemple from "../../assets/imgs/temp/Meenakshi Amman Temple.jpg";
import jagannathTemple from "../../assets/imgs/temp/Jagannath Temple.jpg";
const features = [
  {
    icon: <FaHandshake className="text-4xl text-orange-600 mb-4" />,
    title: "Authentic & Verified",
    description:
      "We partner only with verified priests, pundits, and temples to ensure genuine spiritual experiences.",
  },
  {
    icon: <FaOm className="text-4xl text-orange-600 mb-4" />,
    title: "Seamless Rituals",
    description:
      "Book online pujas, havans, and rituals from anywhere in the world with ease and convenience.",
  },
  {
    icon: <FaGlobe className="text-4xl text-orange-600 mb-4" />,
    title: "Global Community",
    description:
      "Connect with a global community and explore temples and traditions from different regions of India.",
  },
  {
    icon: <FaBook className="text-4xl text-orange-600 mb-4" />,
    title: "Spiritual Library",
    description:
      "Access a rich library of ancient texts, mantras, and spiritual discourses to deepen your knowledge.",
  },
  {
    icon: <FaStar className="text-4xl text-orange-600 mb-4" />,
    title: "Personalized Guidance",
    description:
      "Receive personalized astrology readings and spiritual guidance tailored to your specific needs.",
  },
  {
    icon: <FaHeart className="text-4xl text-orange-600 mb-4" />,
    title: "Dedicated Support",
    description:
      "Our dedicated support team is available 24/7 to assist you on your spiritual journey.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    quote:
      "Vama has brought a new level of peace and convenience to my spiritual practices. The aarti services are incredibly well-organized and truly divine. It's a blessing to connect with my faith so easily from home.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    quote:
      "I was skeptical at first, but the live darshan feature is an amazing experience. The pandit ji's prayers were so heartfelt, and I felt the positive energy radiating through the screen. A truly a must-have app for every devotee.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Singh",
    quote:
      "The personalized puja services are a game-changer. I was able to perform a ritual for my family's well-being with a real pandit, and the entire process was seamless. Thank you, Vama, for this wonderful platform!",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Kiran Patel",
    quote:
      "I've always wanted to learn more about my rituals. This platform's guidance is exceptional. The explanations are easy to follow, and the community is very supportive. I highly recommend it!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Manoj Das",
    quote:
      "This service is a beacon of light in my busy life. The ease of booking a puja and receiving sacred prasad at my doorstep is unparalleled. It feels like the temple is right here with me. Thank you!",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const templesData = [
  {
    id: 1,
    name: "Kashi Vishwanath Temple",
    poojaType: "Shiva Abhishekam",
    address: "Varanasi, Uttar Pradesh",
    image: kashiTemnple,
    link: "/temples/1",
    rating: 4.9,
    description:
      "Famous Hindu temple dedicated to Lord Shiva in Varanasi on the Ganga; one of the twelve Jyotirlingas.",
  },
  {
    id: 2,
    name: "Meenakshi Amman Temple",
    poojaType: "Special Navaratri Pooja",
    address: "Madurai, Tamil Nadu",
    image: meenakshiTemple,
    link: "/temples/2",
    rating: 4.8,
    description:
      "A historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai.",
  },
  {
    id: 3,
    name: "Jagannath Temple",
    poojaType: "Rath Yatra Special",
    address: "Puri, Odisha",
    image: jagannathTemple,
    link: "/temples/3",
    rating: 4.7,
    description:
      "An important Hindu temple dedicated to Jagannath, a form of Krishna. It is located in Puri, Odisha.",
  },
];

const servicesData = [
  {
    icon: <FaPrayingHands className="text-4xl text-orange-600" />,
    title: "Pooja Booking & Live Darshan",
    description:
      "Book your pooja online and experience live darshan from anywhere in the world.",
  },
  {
    icon: <FaOm className="text-4xl text-orange-600" />,
    title: "Prasad & Homa Delivery",
    description:
      "Receive sacred prasad and homa offerings delivered directly to your doorstep.",
  },
  {
    icon: <FaGlobe className="text-4xl text-orange-600" />,
    title: "Connect with Temples",
    description:
      "Discover and connect with a vast network of verified temples across India and beyond.",
  },
  {
    icon: <FaStar className="text-4xl text-orange-600" />,
    title: "Astrology & Guidance",
    description:
      "Get personalized spiritual guidance and astrology readings from renowned experts.",
  },
  {
    icon: <FaBook className="text-4xl text-orange-600" />,
    title: "Vedic Learning & Workshops",
    description:
      "Participate in online classes and workshops to deepen your understanding of scriptures.",
  },
  {
    icon: <FaHeart className="text-4xl text-orange-600" />,
    title: "Dedicated Community Support",
    description:
      "Join a vibrant community and receive dedicated support on your spiritual journey.",
  },
  {
    icon: <FaRegLightbulb className="text-4xl text-orange-600" />,
    title: "Spiritual Insights",
    description:
      "Gain deeper spiritual insights through articles, discourses, and expert talks.",
  },
  {
    icon: <FaLandmark className="text-4xl text-orange-600" />,
    title: "Customized Pilgrimages",
    description:
      "Plan and book personalized spiritual tours to revered temples and holy sites.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-orange-600" />, // 👈 new icon
    title: "Charity & Seva Programs",
    description:
      "Contribute to temple charities and participate in seva programs for the community.",
  },
];

const donationData = [
  {
    icon: <FaTree className="text-5xl text-orange-600 mb-4" />,
    title: "Temple & Heritage Preservation",
    description:
      "Help us preserve ancient temples and their rich cultural heritage for future generations.",
  },
  {
    icon: <FaUsers className="text-5xl text-orange-600 mb-4" />,
    title: "Community & Welfare",
    description:
      "Support the well-being of priests and temple staff through our dedicated welfare programs.",
  },
  {
    icon: <FaSeedling className="text-5xl text-orange-600 mb-4" />,
    title: "Spiritual Education",
    description:
      "Contribute to initiatives that promote Vedic learning and spiritual knowledge across the globe.",
  },
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
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center "
        style={{
          backgroundImage: `url(${HomePageImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
            Your Divine Connection, Anywhere, Anytime
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp">
            Discover and book divine poojas, live darshans, and spiritual
            services from the comfort of your home.
          </p>
          <Button href="/temples" className="animate-fadeInScale">
            Explore Temples
          </Button>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white via-orange-50 via-60% via-yellow-50 to-white">
        {/* Featured Temples Section */}
        <section className="relative py-24 px-6">
          <div className="container mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Featured Temples
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl">
              Explore some of the most revered and beautiful temples across
              India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 justify-items-center">
              {templesData.map((t) => (
                <TempleCard key={t.id} temple={t} />
              ))}
            </div>

          </div>
        </section>

        {/* Our Services Section - Updated to a static grid layout */}
        <section className="relative py-24 px-6">
          <div className="container mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Our Divine Services
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl">
              Vama brings authentic spiritual experiences directly to your home
              with trust, devotion, and modern convenience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white p-10 rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden group"
                >
                  {/* Softer glowing aura */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-lg"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon inside softer saffron circle */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-yellow-50 text-orange-600 text-4xl mb-6 shadow-lg group-hover:scale-110 transform transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-orange-700 group-hover:text-orange-900 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-orange-700/90 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* Decorative top accent, now even softer */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-orange-50 to-transparent pointer-events-none"></div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8">
          {/* A style block to define the custom animation for the moving gradient */}
          <style jsx>{`
            @keyframes move-gradient {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 100% 50%;
              }
            }
          `}</style>

          <div className="container mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Why Choose Do-Rituals?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl">
              We connect you with authentic spiritual experiences through a
              modern and reliable platform, built on trust and devotion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 shadow-md rounded-lg transition-all duration-400 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group"
                  // Unique clipped path for the card dimension
                  style={{
                    clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                  }}
                >
                  {/* Main "Ethereal Glow" background for a soft, internal aura */}
                  <div
                    className="absolute inset-0 rounded-lg transition-all duration-500 ease-out transform scale-0 opacity-0 group-hover:scale-105 group-hover:opacity-100 pointer-events-none"
                    style={{
                      clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                      background:
                        "radial-gradient(circle at center, #FFF4E0 0%, rgba(255, 255, 255, 0) 70%)",
                    }}
                  ></div>

                  {/* The Wrapper for the Infinite Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-lg pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    {/* The div with the infinite, moving gradient */}
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                        // Using repeating-linear-gradient for seamless movement
                        background:
                          "repeating-linear-gradient(to right, #FFD700 0%, #FF4500 20%, #FFD700 40%)",
                        backgroundSize: "200% 100%", // Larger background to allow for movement
                        animation: "move-gradient 6s linear infinite", // Apply the custom keyframe animation
                        filter: "blur(4px)", // Soften the gradient border
                      }}
                    ></div>
                    {/* The masking div to create the border effect */}
                    <div
                      className="absolute inset-[2px] bg-white rounded-lg"
                      style={{
                        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                      }}
                    ></div>
                  </div>

                  {/* Content layer positioned above all background effects */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-4xl mb-4 text-orange-400 group-hover:text-red-500 transition-colors duration-400 ease-in-out">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-2xl mb-2 text-gray-800 group-hover:text-red-700 transition-colors duration-400 ease-in-out">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-red-600 transition-colors duration-400 ease-in-out">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donate Section (New) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Support Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl">
              Your support helps us preserve spiritual heritage, empower
              communities, and spread divine knowledge globally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {donationData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-yellow-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <Button
                href="/donate"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all"
              >
                Donate Now
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Updated: NOW WITH CAROUSEL) */}
        <section className="bg-amber-50 py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
              What Our Devotees Say
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-16 max-w-2xl">
              Hear from our community about their experience with Vama.
            </p>

            <div className="relative">
              {/* Carousel Wrapper */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full md:w-1/2 px-4"
                    >
                      <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col items-center text-center relative overflow-hidden
                  transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 hover:border-2">
                        {/* Background SVG Icon */}
                        <div className="absolute top-4 left-4 text-gray-100 opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                          <FaQuoteLeft className="w-12 h-12" />
                        </div>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 mb-6 mt-8 group-hover:border-orange-400 transition-all duration-300"
                        />
                        <p className="font-semibold text-orange-500 mb-2">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600 italic leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>

                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevSlide}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-20 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-20 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <DownloadAppSection />
      </div>
    </>
  );
};

export default HomePage;
