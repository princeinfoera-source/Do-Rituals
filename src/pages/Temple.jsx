import { useLocation, useParams } from "react-router-dom";
import { FaClock, FaPhone, FaUserTie, FaMapMarkerAlt, FaUtensils } from "react-icons/fa";
import { templeData } from "../store/templeSampleData";
import modak from "../assets/imgs/temp/modak.jpeg"
import MotichoorLaddoo from "../assets/imgs/temp/Motichoor Laddoo.jpeg"

const createSlug = (name) => name.replace(/\s+/g, "-").toLowerCase();

const prasadItems = [
  {
    id: 1,
    name: "Modak",
    img: modak,
    description: "Sweet dumplings believed to be Lord Ganesha’s favorite delicacy.",
  },
  {
    id: 2,
    name: "Motichoor Laddoo",
    img: MotichoorLaddoo,
    description: "Saffron-infused boondi balls, popular festive prasad.",
  },
  {
    id: 3,
    name: "Puran Poli",
    img: MotichoorLaddoo,
    description: "Sweet flatbread stuffed with jaggery and chana dal, a festive staple.",
  },
  {
    id: 4,
    name: "Makhan Mishri",
    img: modak,
    description: "A classic prasad with butter and sugar crystals.",
  },
];

const TemplePage = () => {
  const location = useLocation();
  const { templeName } = useParams();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 text-gray-800">
// {/* Hero Section */}
<section
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center lg:items-stretch"
  style={{ backgroundImage: `url(${temple.img_src})` }}
  role="banner"
  aria-label={`Hero section for ${temple.name}`}
>
  {/* Full overlay for better contrast and readability */}
  <div className="absolute inset-0 bg-black/60 lg:bg-black/50" aria-hidden="true" />

  {/* Left Temple Info */}
  <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12 text-white max-w-md lg:max-w-none">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
      {temple.name}
    </h1>
    {/* Curved underline effect using pseudo-element (requires Tailwind config or custom CSS) */}
    <div className="relative mb-6 sm:mb-8 after:absolute after:-bottom-2 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-yellow-500 after:rounded-full after:shadow-lg">
      {/* Spacer div for underline positioning */}
    </div>
    <address className="text-amber-100 text-base sm:text-lg lg:text-xl mb-4 not-italic">
      {temple.address}
    </address>
    <div className="flex items-center gap-2 sm:gap-3 text-amber-200 text-sm sm:text-base">
      <FaMapMarkerAlt className="text-orange-400" aria-hidden="true" />
      <span>{temple.location || "Sacred Grounds"}</span>
    </div>
  </div>

{/* Right Prasad Section (enhanced glassmorphism with blur toggle on hover) */}
<div className="relative z-10 flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-center max-w-md lg:max-w-none lg:text-left">
  <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
    {/* Grid of Prasad - responsive and accessible */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
      {prasadItems.map(({ id, name, img, description }, index) => (
        <article
          key={id}
          className="group cursor-pointer relative bg-white/30 backdrop-blur-sm group-hover:backdrop-blur-none border border-white/40 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-orange-400/50 transition-all duration-500 ease-out bg-gradient-to-br from-white/20 to-transparent"
          role="article"
          aria-label={`${name} prasad`}
          style={{ 
            animationDelay: `${index * 100}ms` // Staggered entrance animation
          }}
        >
          {/* Image with gradient overlay for depth */}
          <div className="relative">
            <img
              src={img}
              alt={`${name} - ${description.substring(0, 50)}...`}
              className="w-full h-24 sm:h-32 lg:h-40 object-cover group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Decorative badge on image corner */}
            <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:scale-100">
              Sacred
            </div>
          </div>
          
          {/* Content with enhanced styling */}
          <div className="p-3 sm:p-4 relative">
            {/* Name with accent line */}
            <h3 className="text-gray-900/95 font-semibold text-sm sm:text-base mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300 drop-shadow-md relative">
              {name}
              <div className="absolute -bottom-1 left-0 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            
            {/* Description */}
            <p className="text-gray-800/90 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-3 opacity-100 drop-shadow-md">
              {description}
            </p>
            
            {/* Call-to-action button for engagement */}
            <button className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-1.5 px-3 rounded-lg text-xs sm:text-sm shadow-lg opacity-100 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-0 transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent">
              Oder Prasad
            </button>
          </div>
          
          {/* Subtle glow effect on hover (using pseudo-element) */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/15 to-yellow-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
        </article>
      ))}
    </div>
  </div>
</div>


</section>




      {/* About Section - Full Width */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-800 border-b-4 border-yellow-500 pb-3 inline-block">
              About the Temple
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">{temple.description}</p>
            <blockquote className="text-yellow-700 text-lg font-semibold italic border-l-4 border-yellow-500 pl-6 bg-amber-50/70 p-4 rounded-xl shadow-inner">
              “May this sacred place bring peace and enlightenment to all who visit.”
            </blockquote>
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

      {/* Gallery Section - Full */}
      {temple.images && temple.images.length > 0 && (
        <section className="w-full py-20 bg-gradient-to-br from-yellow-100 to-amber-200">
          <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-12">
            Temple Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
            {temple.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <img src={image} alt={index} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services Section */}
      {temple.services && temple.services.length > 0 && (
        <section className="w-full py-20 px-6 bg-white">
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

      {/* Map Section Full Width */}
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
