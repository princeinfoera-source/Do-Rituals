import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

// Mock list of locations (Used as default if no location props are passed)
export const mockLocations = [
  "New Delhi, IN",
  "Mumbai, IN",
  "Varanasi, IN",
  "Ujjain, IN",
  "Rameswaram, IN",
];

const SearchBox = ({
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
  locations: propLocations,
  selectedLocation: propSelectedLocation,
  onLocationChange: propOnLocationChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const searchBarRef = useRef(null);

  const [internalLocation, setInternalLocation] = useState(mockLocations[0]);
  const isLocationControlled = propLocations && propSelectedLocation && propOnLocationChange;

  const currentLocations = isLocationControlled ? propLocations : mockLocations;
  const currentLocation = isLocationControlled ? propSelectedLocation : internalLocation;
  const handleLocationChange = isLocationControlled ? propOnLocationChange : setInternalLocation;

  const handleLocationSelect = (location) => {
    handleLocationChange(location);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isDropdownOpen &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="w-full flex justify-center px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center gap-0 w-full max-w-4xl">

        {/* Combined Search Field and Location Dropdown */}
        <div
          ref={searchBarRef}
          className={`flex-1 w-full flex border rounded-l-full shadow-lg bg-white transition-shadow duration-300 
            ${isBtnActive ? 'border-orange-500 ring-4 ring-orange-500/50' : 'border-gray-300'}`}
          onMouseEnter={() => setIsBtnActive(true)}
          onMouseLeave={() => setIsBtnActive(false)}
        >
          {/* Main Search Input */}
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Discover Pujas, find Temples, or explore all Jyotirlings"
            className="flex-1 min-w-0 px-6 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-base rounded-l-full"
            aria-label="Search for Temple, Jyotirling, or Puja"
            onFocus={() => setIsBtnActive(true)}
            onBlur={() => setIsBtnActive(false)}
            onMouseEnter={() => setIsBtnActive(true)}
            onMouseLeave={() => setIsBtnActive(false)}
          />

          {/* Location Dropdown */}
          {propLocations && (
            <div className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer h-full flex items-center justify-between gap-2 px-5 border-l border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none transition-colors duration-200 text-sm sm:text-base font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                aria-expanded={isDropdownOpen}
                aria-controls="location-menu"
                onFocus={() => setIsBtnActive(true)}
                onBlur={() => setIsBtnActive(false)}
                onMouseEnter={() => setIsBtnActive(true)}
                onMouseLeave={() => setIsBtnActive(false)}
              >
                <MapPin className="lucide w-4 h-4 text-orange-600" />
                <span className="hidden sm:inline-block md:inline">{currentLocation}</span>
                <ChevronDown
                  className={`lucide w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  id="location-menu"
                  className="absolute z-30 right-0 top-full mt-3 w-64 rounded-xl shadow-2xl bg-white border border-gray-100 overflow-hidden transform origin-top-right animate-in fade-in-0 zoom-in-95"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {currentLocations.map((location) => (
                    <button
                      key={location}
                      onClick={() => handleLocationSelect(location)}
                      className={`cursor-pointer w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-150 ${location === currentLocation ? 'bg-orange-100 font-bold' : ''}`}
                      role="menuitem"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Main Search Button */}
        <button
          type="button"
          onClick={onSearchSubmit}
          onFocus={() => setIsBtnActive(true)}
          onBlur={() => setIsBtnActive(false)}
          onMouseEnter={() => setIsBtnActive(true)}
          onMouseLeave={() => setIsBtnActive(false)}
          className={`cursor-pointer w-full sm:w-auto px-8 py-3 rounded-r-full transition-all duration-300 text-base font-bold flex-shrink-0 shadow-2xl transform
            ${isBtnActive ? 'bg-orange-600' : 'bg-orange-500'} text-white hover:bg-orange-600 hover:scale-[1.03] active:scale-100`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
