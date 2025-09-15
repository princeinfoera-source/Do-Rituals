import { useLocation, useParams } from "react-router-dom";
import { FaClock, FaPhone, FaUserTie } from "react-icons/fa";
import templeData from "../store/templeSampleData";
import "./style.css";

const createSlug = (name) => name.replace(/\s+/g, "-").toLowerCase();

const TemplePage = () => {
  const location = useLocation();
  const { templeName } = useParams();

  const temple =
    location.state?.temple ||
    templeData.find((t) => createSlug(t.name) === templeName);

  if (!temple) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 text-gray-800 text-center p-6">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          404 - Temple Not Found
        </h1>
        <p className="text-lg text-gray-600">
          The temple you are looking for does not exist or the link is invalid.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 pt-20">
      <div className="container mx-auto p-6">

        {/* Hero Section */}
        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl mb-12 h-[400px] md:h-[600px] flex items-end"
          style={{
            backgroundImage: `url(${temple.img_src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
          <div className="relative p-8 md:p-12 text-white z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
              {temple.name}
            </h1>
            <p className="text-lg md:text-xl font-light text-amber-200">
              {temple.address}
            </p>
          </div>
        </div>

        <div className="md:col-span-3 bg-white p-10 rounded-3xl shadow-2xl border border-amber-100 flex flex-col md:flex-row gap-12">
          {/* Left side: Text content */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-2 border-b-4 border-yellow-500 pb-3 tracking-wide">
              About the Temple
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg md:text-xl max-w-prose">
              {temple.description}
            </p>
            <blockquote className="mt-6 text-yellow-600 text-lg md:text-xl font-semibold italic border-l-4 border-yellow-400 pl-6 max-w-prose shadow-sm bg-amber-50 p-4 rounded-lg">
              “May this sacred place bring peace and enlightenment to all who visit.”
            </blockquote>
          </div>

          {/* Right side: Decorative imagery */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={temple.images[0]}
                alt="Temple Symbol"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"
              />
              {/* Optional decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>


        {/* Temple Gallery Section */}
        {temple.images && temple.images.length > 0 && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-800 mb-12 animate-fade-in-up">
              <span className="relative inline-block">
                Temple Gallery
                <span className="absolute bottom-[-10px] left-1/2 w-24 h-1 bg-yellow-600 transform -translate-x-1/2 rounded-full"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {temple.images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105 group"
                >
                  <img
                    src={image}
                    alt={`Temple image ${index + 1}`}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:brightness-90"
                  />
                  {/* Overlay with a more refined look on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      Divine View {index + 1}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      A stunning capture of the temple.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Services Section */}
        {temple.services && temple.services.length > 0 && (
          <section className="bg-white p-10 rounded-3xl shadow-2xl border border-amber-100 mb-12">
            <h2 className="text-4xl font-extrabold text-yellow-700 mb-10 tracking-wide">
              Services Available
              <span className="block w-20 h-1 bg-yellow-500 rounded-full mt-3"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {temple.services.map((service, index) => (
                <div
                  key={index}
                  className="relative p-1 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 animate-gradient-move blur-lg opacity-50"></div>

                  {/* Card Content */}
                  <div className="relative bg-amber-50 p-6 rounded-xl flex flex-col justify-between border border-amber-100 shadow-md">
                    <div className="flex-1">
                      <h3 className="text-gray-800 text-xl font-semibold mb-3">
                        {service.name}
                      </h3>
                      <p className="text-yellow-700 font-extrabold text-2xl mb-1">
                        ₹{service.price}
                      </p>
                      <p className="text-gray-600 text-sm uppercase tracking-widest mb-4">
                        per ritual
                      </p>
                      <p className="text-gray-600 italic text-sm">
                        An auspicious spiritual ritual to bring blessings and peace.
                      </p>
                    </div>
                    <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}




        {/* Map Section */}
        {temple.map_src && (
          <div>
            <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
              Find Us on the Map
            </h2>
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-amber-100"
              style={{ height: "450px" }}
            >
              <iframe
                title="Temple Location Map"
                src={temple.map_src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default TemplePage;
