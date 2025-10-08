import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const TempleCard = ({ temple }) => (
  <div className="relative border border-gray-200 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 bg-white group cursor-pointer shadow-lg hover:shadow-2xl">
    {/* Image with a subtle filter and animated hover effect */}
    <div className="relative overflow-hidden">
      <img
        src={temple.image}
        alt={temple.name}
        className="w-full h-56 object-fit transition-transform duration-300 group-hover:scale-110 group-hover:filter group-hover:brightness-90"
        loading="lazy"
      />
      {/* Rating badge with a clean, modern design */}
      <div className="absolute top-4 right-4 flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-800 shadow-md">
        <FaStar className="text-yellow-500 mr-1" />
        <span>{temple.rating}</span>
      </div>
    </div>

    <div className="p-6">
      {/* Temple Name */}
      <h3 className="font-extrabold text-2xl mb-2 text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
        {temple.name}
      </h3>

      {/* Location */}
      <p className="text-gray-500 flex items-center mb-2">
        <FaMapMarkerAlt className="text-orange-500 mr-2" />
        <span className="italic text-sm">{temple.address}</span>
      </p>

      {/* Description */}
      <p className="text-gray-700 mb-6 text-sm leading-relaxed line-clamp-2">
        {temple.description}
      </p>

      {/* Explore More Button with Saffron-inspired gradient */}
      <a
        href={temple.link}
        className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-700 text-white font-semibold shadow-md hover:from-orange-600 hover:to-amber-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      >
        Explore More
      </a>
    </div>
  </div>
);

export default TempleCard;
