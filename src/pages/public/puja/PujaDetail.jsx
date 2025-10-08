import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaTag, FaStar, FaShoppingCart } from 'react-icons/fa';
import moment from 'moment';

// Mock Calendar component for demonstration
const Calendar = ({ onSelectDate, selectedDate, onSelectTime, selectedTime }) => {
    const dates = [
        moment().add(1, 'days'),
        moment().add(2, 'days'),
        moment().add(3, 'days'),
    ];
    const times = ["09:30 AM", "11:00 AM", "01:30 PM", "04:00 PM"];

    return (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-lg text-gray-700 mb-2">Select Date:</h4>
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => onSelectDate(date)}
                            className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors duration-200
                                ${selectedDate?.isSame(date, 'day') ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'}`}
                        >
                            {date.format('ddd, MMM Do')}
                        </button>
                    ))}
                </div>
            </div>
            {selectedDate && (
                <div>
                    <h4 className="font-semibold text-lg text-gray-700 mb-2">Select Time Slot:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {times.map((time, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => onSelectTime(time)}
                                className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors duration-200
                                    ${selectedTime === time ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'}`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Offering Card Component (Prasad/Daan Punya) ---
const OfferingCard = ({ card, isSelected, onToggle, icon }) => (
    <div
        className={`bg-white p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 h-full flex flex-col justify-between
            ${isSelected ? "border-indigo-500 shadow-lg scale-[1.02]" : "border-gray-200 hover:border-indigo-300 hover:shadow-md"}`}
        onClick={onToggle}
    >
        <div className="flex items-start gap-3 mb-2">
            <span className="text-2xl mt-1 text-indigo-500">{icon}</span>
            <div className="flex-grow">
                <h4 className="font-bold text-gray-900 text-lg leading-tight">{card.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{card.description}</p>
            </div>
        </div>
        <div className="flex justify-between items-center pt-2 border-t mt-auto">
            <span className="text-2xl font-extrabold text-green-700">₹{card.price.toFixed(2)}</span>
            {isSelected ? (
                <button type="button" className="text-red-500 flex items-center gap-1 font-semibold text-sm cursor-pointer">
                    <span className="text-lg">⊖</span> Remove
                </button>
            ) : (
                <button type="button" className="text-indigo-500 flex items-center gap-1 font-semibold text-sm cursor-pointer">
                    <span className="text-lg">⊕</span> Add
                </button>
            )}
        </div>
    </div>
);

// --- Fallback Static Data ---
const defaultData = {
    name: "Satyanarayan Bhagwaan Pooja",
    image: "https://picsum.photos/800/600?random=10",
    price: 2501.0,
    location: "Pisach Mochan, Kashi, Uttar Pradesh",
    description: "Perform Satyanarayan Bhagwaan Puja to honor and show devotion to deities, inviting their blessings, protection, and prosperity into our lives. This powerful ritual is performed to express gratitude to Lord Vishnu.",
    additionalInfo: `**Puja Includes:**
• Sankalpa (Vow) in your name.
• Prasad delivered to your home.
• Live streaming access.
• Dedicated priest service.`,
    rating: "4.9",
    ratingCount: "7,000",
    participationInfo: "Till now 3,00,000+ Devotees have participated in Pujas conducted by Do-Rituals Puja Seva.",
    oldPrice: 3100.0,
    prasadCards: [
        { id: 'p1', name: "Special Aarti Thali Prasad", price: 151.0, description: "A divine thali with flowers, fruits, and incense." },
        { id: 'p2', name: "Shriphal (Coconut)", price: 71.0, description: "A sacred offering of whole coconut." },
        { id: 'p3', name: "Tulsi Mala Chadawa", price: 251.0, description: "Blessed Tulsi Mala offered to the deity." },
        { id: 'p4', name: "Panchamrut Samagri", price: 121.0, description: "Five nectars (milk, curd, ghee, honey, sugar) used in abhishek." },
        { id: 'p5', name: "Vastra (Cloth) Offering", price: 351.0, description: "New devotional clothes for the deity." },
        { id: 'p6', name: "Flower Garland Seva", price: 101.0, description: "Contribution for fresh flower garlands." },
    ],
    daanPunyaItems: [
        { id: 'd1', name: "Gau Daan Seva", price: 501.0, description: "Donation for cow welfare and upkeep." },
        { id: 'd2', name: "Bhojanam Seva (10 People)", price: 1100.0, description: "Sponsor a meal for 10 devotees/needy." },
        { id: 'd3', name: "Temple Maintenance Fund", price: 250.0, description: "Contribution to daily temple operations." },
        { id: 'd4', name: "Vidya Daan (Education)", price: 750.0, description: "Support education for local children." },
    ],
};

// --- Main PujaDetail Component ---
const PujaDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Use dynamic data from location.state.puja, with a fallback to defaultData.
    const dynamicData = location.state?.puja || {};
    const data = {
        ...defaultData,
        ...dynamicData,
        prasadCards: defaultData.prasadCards,
        daanPunyaItems: defaultData.daanPunyaItems,
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedPrasadCards, setSelectedPrasadCards] = useState({});
    const [selectedDaanPunya, setSelectedDaanPunya] = useState({});

    const calculateTotal = useMemo(() => {
        const prasadTotal = Object.values(selectedPrasadCards).reduce((sum, card) => sum + card.price, 0);
        const daanTotal = Object.values(selectedDaanPunya).reduce((sum, item) => sum + item.price, 0);
        return {
            basePrice: data.price,
            prasadTotal,
            daanTotal,
            grandTotal: data.price + prasadTotal + daanTotal
        };
    }, [selectedPrasadCards, selectedDaanPunya, data.price]);

    const handleOfferingToggle = (card, type) => {
        const setState = type === 'prasad' ? setSelectedPrasadCards : setSelectedDaanPunya;
        setState(prev => {
            const newState = { ...prev };
            if (newState[card.id]) {
                delete newState[card.id];
            } else {
                newState[card.id] = card;
            }
            return newState;
        });
    };

    const handleBookNow = () => {
        // Validation: Ensure date and time are selected
        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time slot before proceeding to checkout.");
            return;
        }

        const bookingDetails = {
            transactionId: `TX-${Date.now()}`,
            pujaServiceId: data.name.replace(/\s+/g, "_").toUpperCase(),
            pujaName: data.name,
            location: data.location,
            bookingDateTime: selectedDate.format("YYYY-MM-DD") + " " + selectedTime,
            pujaDate: selectedDate.format("LL"),
            pujaTime: selectedTime,
            pricing: {
                basePrice: calculateTotal.basePrice,
                prasadTotal: calculateTotal.prasadTotal,
                daanTotal: calculateTotal.daanTotal,
                discountPercent: data.oldPrice ? (((data.oldPrice - data.price) / data.oldPrice) * 100).toFixed(0) : 0,
                grandTotal: calculateTotal.grandTotal,
            },
            lineItems: [
                { type: 'PUJA', name: data.name, price: calculateTotal.basePrice, quantity: 1, id: 'base-puja' },
                ...Object.values(selectedPrasadCards).map(card => ({
                    type: 'PRASAD',
                    name: card.name,
                    price: card.price,
                    quantity: 1,
                    id: card.id
                })),
                ...Object.values(selectedDaanPunya).map(item => ({
                    type: 'DAAN_PUNYA',
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    id: item.id
                })),
            ],
        };

        console.log("--- PERFECT BOOKING OBJECT GENERATED ---", bookingDetails);

        navigate('/checkout', { state: { booking: bookingDetails } });
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 py-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
                    {data.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-lg font-bold shadow-md">
                            <FaStar />
                            <span>{data.rating}</span>
                        </div>
                        <span className="text-lg text-gray-600">({data.ratingCount} ratings)</span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-2 sm:mt-0 p-2 bg-blue-50 rounded-lg">
                        <FaUsers />
                        {data.participationInfo}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-full h-96 object-fit rounded-xl mb-6 shadow-md"
                            />
                            <div className="flex items-center gap-3 mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <FaMapMarkerAlt />
                                <div>
                                    <p className="font-semibold text-sm text-gray-700">Puja Location:</p>
                                    <p className="text-lg font-bold text-gray-800">{data.location}</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">About the Puja</h2>
                            <p className="mb-6 text-gray-700 leading-relaxed text-lg">{data.description}</p>

                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Your Registration Includes</h3>
                            <div
                                className="text-gray-700 text-base mb-6 whitespace-pre-line bg-blue-50 p-4 rounded-lg"
                                dangerouslySetInnerHTML={{ __html: data.additionalInfo.replace(/\*/g, '').replace(/\n/g, '<br/>') }}
                            ></div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <FaCalendarAlt /> Select Date & Time
                            </h3>
                            <Calendar
                                onSelectDate={setSelectedDate}
                                selectedDate={selectedDate}
                                onSelectTime={setSelectedTime}
                                selectedTime={selectedTime}
                            />
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
                                Prasad / Chadawa
                            </h2>
                            <p className="text-gray-600 mb-4">Select items to be offered on your behalf during the Puja.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.prasadCards.map((card) => (
                                    <OfferingCard
                                        key={card.id}
                                        card={card}
                                        isSelected={!!selectedPrasadCards[card.id]}
                                        onToggle={() => handleOfferingToggle(card, 'prasad')}
                                        icon={<FaTag />}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent curved-underline">
                                Daan Punya
                            </h2>
                            <p className="text-gray-600 mb-4">Contribute to charity and spiritual services for added blessings.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.daanPunyaItems.map((item) => (
                                    <OfferingCard
                                        key={item.id}
                                        card={item}
                                        isSelected={!!selectedDaanPunya[item.id]}
                                        onToggle={() => handleOfferingToggle(item, 'daan')}
                                        icon={<FaUsers />}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="sticky top-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <div className="mb-6 border-b pb-4">
                                <h4 className="text-xl font-bold text-gray-800 mb-3">Your Selection</h4>
                                <p className="flex justify-between text-sm text-gray-700">
                                    <span>Base Puja ({data.name})</span>
                                    <span className="font-medium">₹{calculateTotal.basePrice.toFixed(2)}</span>
                                </p>
                                {calculateTotal.prasadTotal > 0 && (
                                    <p className="flex justify-between text-sm text-gray-700 mt-1">
                                        <span>Prasad/Chadawa ({Object.keys(selectedPrasadCards).length} items)</span>
                                        <span className="font-medium">₹{calculateTotal.prasadTotal.toFixed(2)}</span>
                                    </p>
                                )}
                                {calculateTotal.daanTotal > 0 && (
                                    <p className="flex justify-between text-sm text-gray-700 mt-1">
                                        <span>Daan Punya ({Object.keys(selectedDaanPunya).length} items)</span>
                                        <span className="font-medium">₹{calculateTotal.daanTotal.toFixed(2)}</span>
                                    </p>
                                )}
                                <div className="mt-3 pt-3 border-t">
                                    <p className="flex justify-between text-lg font-extrabold text-indigo-700">
                                        <span>Total Payable</span>
                                        <span>₹{calculateTotal.grandTotal.toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={handleBookNow}
                                disabled={!selectedDate || !selectedTime}
                                className={`w-full px-6 py-4 text-white text-xl font-bold rounded-lg flex items-center justify-center gap-3 transition duration-150 shadow-md ${!selectedDate || !selectedTime
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-orange-600 hover:bg-orange-700 hover:shadow-lg'}`}
                            >
                                <FaShoppingCart /> Checkout & Pay
                            </button>

                            <p className="text-center text-xs text-gray-500 mt-3">
                                {selectedDate && selectedTime
                                    ? `Booking for ${selectedDate.format('Do MMM')} at ${selectedTime}`
                                    : 'Please select a date and time to enable booking.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PujaDetail;