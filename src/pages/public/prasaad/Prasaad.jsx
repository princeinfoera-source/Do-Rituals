import { useState, useRef, useEffect } from "react";
import { popularPuja, templeData } from "../../../store/templeSampleData.js";
import { prasadItems } from "../../../store/prasaad.js";
import SearchBox from "../../../components/SearchBox.jsx";
import ScrollingTopMarquee from '../../../components/ScrollingTopMarquee.jsx';
import ScrollingBanner from "../../../components/ScrollingBanner.jsx";
import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const CARD_WIDTH = 260;
const GAP = 24;

const availabilityOptions = ["Availability", "In Stock", "Limited", "Sold Out"];
const ratingOptions = ["Rating", "3", "4", "4.5", "5"];
const typeOptions = ["All", "Prasaad", "Chadhawa"];

function DivineOfferingsSection({ prasadItems, chadhawaCards, templeData }) {
    const [filterAvailability, setFilterAvailability] = useState("All");
    const [filterRating, setFilterRating] = useState("All");
    const [filterType, setFilterType] = useState("All");

    // Merge with extra data for demonstration
    const combinedItems = [...prasadItems, ...chadhawaCards].map(item => {
        const isChadhawa = chadhawaCards.some(c => c.id === item.id);
        const rating = (Math.random() * 2 + 3).toFixed(1);
        const availabilityStates = ["In Stock", "Limited", "Sold Out"];
        const availability = availabilityStates[Math.floor(Math.random() * availabilityStates.length)];
        return { ...item, isChadhawa, rating: parseFloat(rating), availability };
    });

    // Filtering function
    const filteredItems = combinedItems.filter(item => {
        if (filterAvailability !== "All" && item.availability !== filterAvailability) return false;
        if (filterType !== "All" && ((filterType === "Prasaad" && item.isChadhawa) || (filterType === "Chadhawa" && !item.isChadhawa))) return false;
        if (filterRating !== "All") {
            const minRating = parseFloat(filterRating);
            if (item.rating < minRating) return false;
        }
        return true;
    });

    return (
        <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-yellow-50 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-orange-700 mb-8 text-center">
                Divine Offerings - Prasaad & Chadhawa
            </h2>
            <p className="max-w-7xl mx-auto text-center text-gray-700 mb-8">
                Filter offerings by availability, rating, price range, and type. Discover sacred items with purity and spiritual significance.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {/* Availability */}
                <select
                    value={filterAvailability}
                    onChange={(e) => setFilterAvailability(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 cursor-pointer"
                    aria-label="Filter by availability"
                >
                    {availabilityOptions.map(opt => (
                        <option className="bg-amber-100" key={opt} value={opt}>{opt}</option>
                    ))}
                </select>

                {/* Rating */}
                <select
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 cursor-pointer"
                    aria-label="Filter by minimum rating"
                >
                    {ratingOptions.map(opt => (
                        <option className="bg-amber-100" key={opt} value={opt}>
                            {opt === "All" ? opt : `${opt}+`}
                        </option>
                    ))}
                </select>

                {/* Type toggle */}
                <div className="flex items-center space-x-3">
                    {typeOptions.map(opt => (
                        <button
                            key={opt}
                            onClick={() => setFilterType(opt)}
                            className={`px-4 py-2 rounded-full font-semibold transition  cursor-pointer ${filterType === opt
                                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                                : "bg-white border border-gray-300 text-gray-700 hover:ring-1 hover:ring-orange-400"
                                }`}
                            aria-pressed={filterType === opt}
                            aria-label={`Filter by type: ${opt}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6" role="list">
                {filteredItems.length === 0 ? (
                    <p className="text-center text-gray-600 w-full">No offerings found matching current filters.</p>
                ) : (
                    filteredItems.map(({ id, name, img, description, price, rating, availability, isChadhawa }) => {
                        const availableTemples = templeData
                            .filter(t => (t.prasad || []).some(item => item.name === name))
                            .map(t => t.name);
                        return (
                            <article
                                key={id}
                                role="listitem"
                                className="flex flex-col w-[220px] sm:w-[240px] lg:w-[20%] min-w-[200px] bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                                aria-label={`${name} offering, price ₹${price}, ${availability}`}
                                title={`Available at temples: ${availableTemples.join(', ')}`}
                            >
                                <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                                    {img ? (
                                        <img
                                            src={img}
                                            alt={name}
                                            className="w-full h-full object-cover transition duration-700 ease-out group-hover:brightness-110 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-yellow-200 to-orange-300 text-orange-700 font-extrabold text-4xl">
                                            {name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg">
                                        ₹{price}
                                    </div>
                                </div>

                                <div className="p-4 flex flex-col gap-2 flex-grow">
                                    <h3 className="text-lg font-semibold text-orange-700 line-clamp-2">{name}</h3>
                                    <p className="text-gray-800 text-xs line-clamp-3">{description}</p>

                                    <div className="flex flex-wrap justify-between items-center mt-2 gap-2 text-sm text-yellow-600">
                                        <span aria-label={`Rating ${rating} out of 5 stars`}>⭐ {rating}</span>
                                        <span
                                            className={`px-2 py-0.5 rounded-full font-semibold ${availability === "In Stock"
                                                ? "text-green-600 bg-green-100"
                                                : availability === "Limited"
                                                    ? "text-yellow-600 bg-yellow-100"
                                                    : "text-red-600 bg-red-100"
                                                } select-none`}
                                            aria-live="polite"
                                        >
                                            {availability}
                                        </span>
                                    </div>

                                    <div className="mt-2 text-xs text-gray-700 max-h-16 overflow-auto" aria-label="Temples where available">
                                        <span className="font-semibold">Available At:</span>
                                        <ul className="list-disc list-inside max-w-full">
                                            {availableTemples.length ? availableTemples.map((temple, idx) => (
                                                <li key={idx}>{temple}</li>
                                            )) : <li>Currently no temple data</li>}
                                        </ul>
                                    </div>

                                    <button
                                        type="button"
                                        className={`mt-auto py-2 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 cursor-pointer bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 focus:ring-yellow-400}`}
                                    >
                                        {isChadhawa ? "Book Chadhawa" : "Order Prasad"}
                                    </button>
                                </div>
                            </article>
                        );
                    })
                )}
            </div>
        </section>
    );
}

const Prasaad = () => {
    const offersData = [
        "🪷 Free Prasad Delivery on orders above ₹999 🪷",
        "⭐ Get 10% off on your first booking ⭐",
        "🔔 Special discounts for senior citizens 🔔",
        "📱 Download our app for exclusive offers 📱",
    ];

    const chadhawaCards = [
        { id: 'p1', name: "Special Aarti Thali Prasad", price: 151.0, description: "A divine thali with flowers, fruits, and incense." },
        { id: 'p2', name: "Shriphal (Coconut)", price: 71.0, description: "A sacred offering of whole coconut." },
        { id: 'p3', name: "Tulsi Mala Chadawa", price: 251.0, description: "Blessed Tulsi Mala offered to the deity." },
        { id: 'p4', name: "Panchamrut Samagri", price: 121.0, description: "Five nectars (milk, curd, ghee, honey, sugar) used in abhishek." },
        { id: 'p5', name: "Vastra (Cloth) Offering", price: 351.0, description: "New devotional clothes for the deity." },
        { id: 'p6', name: "Flower Garland Seva", price: 101.0, description: "Contribution for fresh flower garlands." },
    ];

    const mockLocations = templeData.map(temple => temple.name);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(mockLocations[0]);
    const [showChadhawa, setShowChadhawa] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setShowChadhawa(prev => !prev);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [showChadhawa]);

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const handleSearchSubmit = () => {
        console.log(`Parent: SEARCH EXECUTED: Query='${searchQuery}', Location='${selectedLocation}'`);
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -(CARD_WIDTH + GAP),
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: CARD_WIDTH + GAP,
                behavior: "smooth",
            });
        }
    };

    const activeCards = showChadhawa ? chadhawaCards : prasadItems;

    return (
        <div className="overflow-x-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col items-center bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 to-yellow-200/5">

                <ScrollingTopMarquee pujaData={popularPuja} />

                <div>
                    <div className="flex flex-col lg:flex-row items-center w-full mx-auto gap-12 mt-2 px-4 sm:px-6 z-10 lg:pl-20">
                        {/* Text & Description Section */}
                        <div className="w-full flex flex-col justify-center items-center lg:items-start lg:text-left lg:p-0">
                            <h2 className="text-4xl font-extrabold text-orange-700 mb-4 transition-all duration-300">
                                {showChadhawa ? "Chadhawa Offers" : "Prasaad"}
                            </h2>
                            <p className="text-gray-700 text-center lg:text-left max-w-md transition-all duration-300">
                                {showChadhawa
                                    ? "The Chadhawa section features a curated range of sacred items specifically selected for offering at the temple as heartfelt gestures of devotion. Each item represents a timeless tradition, allowing devotees to connect more deeply with the divine, seek blessings for themselves and their loved ones, and participate in spiritually meaningful rituals performed at holy shrines. Discover thoughtfully prepared offerings that honor age-old customs while inviting blessings and prosperity into your life."
                                    : "The Prasaad section presents an exquisite variety of sacred offerings that devotees can conveniently order and receive as divine blessings from the temple. Every item, prepared with purity and devotion, carries deep spiritual significance and symbolizes the grace of the deity. Receiving or sharing Prasaad is considered highly auspicious—nourishing the body and soul, fostering community, and spreading positive energy and goodwill among devotees near and far."
                                }
                            </p>
                        </div>

                        {/* Carousel Section */}
                        <div className="flex flex-col items-center justify-center w-full lg:w-[60vw] h-auto gap-4">
                            <div className="flex items-center w-full">
                                {/* Left arrow */}
                                <button
                                    className="cursor-pointer p-3 rounded-full shadow disabled:opacity-40 transition-all duration-300 flex-shrink-0"
                                    onClick={handlePrev}
                                    aria-label="Previous"
                                >
                                    <FaChevronLeft className="text-orange-500 text-m" />
                                </button>
                                {/* Carousel */}
                                <div
                                    ref={carouselRef}
                                    className="cursor-pointer flex gap-6 pt-5 overflow-x-auto overflow-y-clip scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar w-full h-auto"
                                >
                                    {activeCards.map(({ id, name, img, description, price }) => (
                                        <article
                                            key={id}
                                            className="group min-w-[240px] h-auto max-w-[280px] flex-shrink-0 snap-start bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-orange-400/50 transition-all duration-500 ease-out bg-gradient-to-br from-white/20 to-transparent relative"
                                        >
                                            <div className="relative">
                                                {img ? (
                                                    <img
                                                        src={img}
                                                        alt={name}
                                                        className="w-full h-48 object-cover group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-out"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="w-full h-48 bg-orange-100 flex items-center justify-center text-orange-800 font-bold text-2xl">
                                                        {name.charAt(0)}
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Sacred
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="flex justify-between items-center text-gray-900/95 font-semibold text-base mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                                                    <span className="truncate">{name}</span>
                                                    <span className="text-orange-600 font-bold ml-2 flex-shrink-0">₹{price}</span>
                                                </h3>
                                                <p className="text-gray-800/90 text-sm line-clamp-3 leading-relaxed mb-2">{description}</p>
                                                <button className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-1.5 px-3 rounded-lg text-sm shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                                                    {showChadhawa ? "Offer Chadhawa" : "Order Prasad"}
                                                </button>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                {/* Right arrow */}
                                <button
                                    className="cursor-pointer p-3 rounded-full shadow disabled:opacity-40 transition-all duration-300 flex-shrink-0"
                                    onClick={handleNext}
                                    aria-label="Next"
                                >
                                    <FaChevronRight className="text-orange-500 text-m" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Dot Selector Below Carousel */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${!showChadhawa ? "bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg scale-110" : "bg-gray-300 opacity-60"}`}
                            aria-label="Switch to Prasaad"
                            onClick={() => setShowChadhawa(false)}
                        />
                        <button
                            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${showChadhawa ? "bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg scale-110" : "bg-gray-300 opacity-60"}`}
                            aria-label="Switch to Chadhawa"
                            onClick={() => setShowChadhawa(true)}
                        />
                    </div>
                </div>

                {/* Scrolling Banner */}
                <div className="fixed bottom-0 left-0 w-full z-50">
                    <ScrollingBanner offers={offersData} />
                </div>

                <div className="w-full flex flex-col items-center justify-center p-8 mx-auto">
                    <div className="w-full px-4 sm:px-6 lg:px-0">
                        <SearchBox
                            locations={mockLocations}
                            selectedLocation={selectedLocation}
                            onLocationChange={handleLocationChange}
                            searchQuery={searchQuery}
                            onSearchQueryChange={setSearchQuery}
                            onSearchSubmit={handleSearchSubmit}
                            placeholder={"Discover Prasaad/Chadhawa find Temples, or explore all Jyotirlings"}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>
                </div>
            </section>

            <section>
                <DivineOfferingsSection prasadItems={prasadItems} chadhawaCards={chadhawaCards} templeData={templeData} />
            </section>
        </div>
    );
}

export default Prasaad;
