import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

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
  placeholder: placeholder,
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    // Added relative & overflow-visible here to fix dropdown clipping
    <div className="w-full flex justify-center px-4 md:px-8 relative overflow-visible">
      <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-4xl">

        {/* Search Input + Location */}
        <div
          ref={searchBarRef}
          className={`flex-1 w-full flex border rounded-md sm:rounded-l-full sm:rounded-r-none shadow-lg bg-white transition-shadow duration-300 overflow-visible
            ${isBtnActive ? 'border-orange-500 ring-4 ring-orange-500/50' : 'border-gray-300'}`}
          onMouseEnter={() => setIsBtnActive(true)}
          onMouseLeave={() => setIsBtnActive(false)}
        >
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder={placeholder}
            className="flex-1 min-w-0 px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-base rounded-none"
            aria-label="Search for Temple, Jyotirling, or Puja"
            onFocus={() => setIsBtnActive(true)}
            onBlur={() => setIsBtnActive(false)}
          />

          {propLocations && (
            <div className="relative flex-shrink-0 border-l border-gray-300">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer h-full flex items-center justify-between gap-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                aria-expanded={isDropdownOpen}
                aria-controls="location-menu"
              >
                <MapPin className="lucide w-4 h-4 text-orange-600" />
                <span className="hidden sm:inline-block">{currentLocation}</span>
                <ChevronDown
                  className={`lucide w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  id="location-menu"
                  className="absolute z-50 right-0 top-full mt-2 w-64 rounded-lg shadow-2xl bg-white border border-gray-100 overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {currentLocations.map((location) => (
                    <button
                      key={location}
                      onClick={() => handleLocationSelect(location)}
                      className={`cursor-pointer w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-150 ${location === currentLocation ? 'bg-orange-100 font-bold' : ''
                        }`}
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

        {/* Search Button */}
        <button
          type="button"
          onClick={onSearchSubmit}
          className={`cursor-pointer w-full sm:w-auto px-8 py-3 rounded-md sm:rounded-r-full sm:rounded-l-none transition-all duration-300 text-base font-bold shadow-2xl text-white 
            ${isBtnActive ? 'bg-orange-600' : 'bg-orange-500'} hover:bg-orange-600 hover:scale-[1.03] active:scale-100`}
          onMouseEnter={() => setIsBtnActive(true)}
          onMouseLeave={() => setIsBtnActive(false)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
