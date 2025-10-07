import { useState } from "react";
import { popularPuja } from "../store/templeSampleData.js";
import ScrollingBanner from "./ScrollingBanner.jsx";
import filtersData from "../store/Library.js";
import ArtiPopup from "./ArtiPopup.jsx";
import SearchBox, { mockLocations } from "../components/SearchBox.jsx";

const Library = () => {
  const [selectedLocation, setSelectedLocation] = useState(mockLocations[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLocationChange = (location) => {
    console.log(`Parent: Location updated to: ${location}`);
    setSelectedLocation(location);
  };

  const handleSearchSubmit = () => {
    console.log(`Parent: SEARCH EXECUTED: Query='${searchQuery}', Location='${selectedLocation}'`);
  };
  const offersData = [
    "🪷 Free Prasad Delivery on orders above ₹999 🪷",
    "⭐ Get 10% off on your first booking ⭐",
    "🔔 Special discounts for senior citizens 🔔",
    "📱 Download our app for exclusive offers 📱",
  ];

  const [selected, setSelected] = useState("ALL");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedArti, setSelectedArti] = useState(null);

  // Filter the displayed data based on selected category
  const selectedCategory =
    selected === "ALL"
      ? filtersData.flatMap((cat) => cat.items || [])
      : filtersData.find((cat) => cat.category === selected)?.items || [];

  const handleViewClick = (item) => {
    setSelectedArti(item);
    setShowPopup(true);
  };

  return (
    <div
      className="overflow-x-hidden min-h-screen"
      style={{
        background: `linear-gradient(
          to bottom,
          #fff9e6 0%,
          #faf0b8 40%,  
          #f7df7a 60%,  
          #faf0b8 80%,  
          #fff9e6 100%  
        )`,
      }}
    >
      <section className="relative w-full flex flex-col inset-0 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 to-yellow-200/0">
        <div className="relative z-20 w-full overflow-hidden bg-white/20 backdrop-blur-md border-b border-white/30 py-3 shadow-sm">
          <div className="flex animate-slide whitespace-nowrap">
            {[...popularPuja, ...popularPuja, ...popularPuja].map(
              ({ name, price, image }, idx) => (
                <div
                  key={`${name}-${idx}`}
                  className="inline-flex cursor-pointer items-center bg-white/30 backdrop-blur-sm border border-yellow-200/40 rounded-xl px-3 py-2 mx-2 shadow hover:scale-105 transition-transform duration-300 min-w-[140px]"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-10 h-10 rounded-md object-cover mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-800 truncate">
                      {name}
                    </span>
                    <span className="text-[11px] text-yellow-700 font-bold">
                      {price}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Keyframes and custom scrollbar styles */}
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-slide {
              display: flex;
              width: max-content;
              animation: slide 25s linear infinite;
            }
            .animate-slide:hover {
              animation-play-state: paused;
            }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>

        <hr className="border-t border-yellow-400 mt-6 mx-5 opacity-70" />

        {/* Search / Header */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-evenly w-full h-auto px-2 gap-y-4 sm:gap-y-0 mt-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline mt-5">
            Provided Library
          </h2>

          {/* Search Box */}
          <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-0">
            <SearchBox
              locations={mockLocations}
              selectedLocation={selectedLocation}
              onLocationChange={handleLocationChange}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 px-2 py-4 sm:gap-4 w-full">
          {filtersData.map((item) => {
            const label = item.category;
            const isSelected = label === selected;

            return (
              <div
                key={label}
                onClick={() => setSelected(label)}
                className={`rounded-full cursor-pointer text-sm font-semibold min-w-[100px] text-center transition-colors duration-300 shadow-md ${isSelected ? "p-[3px]" : ""
                  }`}
                style={
                  isSelected
                    ? {
                      background:
                        "radial-gradient(circle, #f97316 60%, transparent 100%)",
                    }
                    : {}
                }
              >
                <div
                  className={`rounded-full flex items-center justify-center px-5 py-2 ${isSelected
                    ? "bg-orange-400 text-white border-0"
                    : "bg-white border border-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white"
                    }`}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center mt-6 mb-6 px-4">
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
            {selectedCategory.length > 0 ? (
              selectedCategory.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
                  style={{ flex: "1 1 260px", maxWidth: "260px" }}
                >
                  <img
                    src={`https://picsum.photos/280/160?random=${idx + 1}`}
                    alt={item?.name || "Devotional Content"}
                    className="object-cover w-full h-40 rounded-t-lg"
                  />
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <h3 className="text-md font-semibold text-gray-900 truncate mb-1">
                      {item?.name || "Untitled"}
                    </h3>
                    {item?.deity && (
                      <p className="text-xs text-orange-600 font-medium mb-1">
                        {item.deity}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 flex-grow mb-3">
                      {item?.whyRead ||
                        item?.whyListen ||
                        "Content coming soon."}
                    </p>
                    <div className="text-[11px] text-gray-500 mb-3">
                      {item?.duration && (
                        <span className="mr-2">⏱ {item.duration}</span>
                      )}
                      {item?.source && <span>📜 {item.source}</span>}
                    </div>
                    <button
                      onClick={() => handleViewClick(item)}
                      className="cursor-pointer self-end px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 font-medium text-xs"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center items-center py-20">
                <p className="text-gray-600 text-lg font-medium">
                  No data found
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <ScrollingBanner offers={offersData} />
      </div>

      {/* Arti Popup */}
      {showPopup && (
        <ArtiPopup
          arti={selectedArti}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Library;
