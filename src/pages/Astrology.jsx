import React, { useState, useMemo } from 'react';
import ScrollingTopMarquee from "../components/ScrollingTopMarquee";
import { popularPuja } from "../store/templeSampleData.js";
import { testimonials, blogPosts, astrologyServices, consultationTopics, astrologerSchedule } from '../store/astrology.js';

// --- INLINE SVG ICON DEFINITIONS (Replaces react-icons/fa) ---
// These custom components ensure the code is self-contained and runnable.

/** Star Icon (FaStar) */
const StarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

/** Chevron Right Icon (FaChevronRight) */
const ChevronRightIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

/** Astrologer Icon (FaUserTie replacement) */
const AstrologerIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M10 17l2 2 2-2" />
        <path d="M12 15v4" />
    </svg>
);

/** Video Icon (FaVideo) */
const VideoIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
    </svg>
);

/** Tag Icon (FaTag) */
const TagIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.586 21.414A2 2 0 0 0 14 21h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5.414a2 2 0 0 0-1.414.586L2.586 13.586a2 2 0 0 0 0 2.828l4.828 4.828a2 2 0 0 0 2.828 0z" />
        <circle cx="17" cy="9" r="1" fill="currentColor" />
    </svg>
);

/** Play Circle Icon (FaRegPlayCircle) */
const PlayCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
);

/** Quote Left Icon (FaQuoteLeft) */
const QuoteLeftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.75 14.167C3.75 18.452 7.054 22.062 12 22.062c.003-.002 0-.001 0-.003V16.75h4.945l-1.956-4.225c-.752-1.624-2.147-2.909-3.793-3.725C9.697 7.91 5.922 6.547 3.75 6.547v7.62zM20.25 6.547v7.62C20.25 18.452 17 22.062 12 22.062v-5.312h4.945l-1.956-4.225c-.752-1.624-2.147-2.909-3.793-3.725C16.197 7.91 19.972 6.547 20.25 6.547z" />
    </svg>
);

/** User Icon (FaUser) */
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

/** Calendar Icon (Date of Birth / Date Selector) */
const CalendarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

/** Clock Icon (Time of Birth / Time Slot) */
const ClockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

/** Map Pin Icon (Place of Birth) */
const MapPinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

/** Mail Icon (Email) */
const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

/** Book Icon (Consultation Topic) */
const BookIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

/** X Icon (Close Modal) */
const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-transparent bg-opacity-40 backdrop-blur-md flex justify-center items-center p-4">
            <div
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border-4 border-orange-300/50 transform transition-all duration-300 scale-100"
                // Prevents closing modal when clicking inside the content area
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors cursor-pointer group-hover:rotate-360"
                    aria-label="Close booking form"
                >
                    <XIcon className="w-6 h-6" />
                </button>

                {children}
            </div>
        </div>
    );
};

const ServiceCard = ({ service }) => {
    const isPremium = service.type === 'paid';
    const isFree = service.type === 'free';

    const mrpPaid = isPremium ? (service.price + 52).toFixed(2) : null;
    const currentPrice = isPremium ? service.price.toFixed(2) : 'FREE';

    return (
        <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 border-2 border-orange-300 flex items-center justify-center mb-3">
                    <AstrologerIcon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex items-center text-sm font-semibold text-orange-600 mb-2">
                    <TagIcon className="w-3 h-3 mr-1" />
                    {isFree ? 'Utility' : 'Premium'}
                </div>
                <h3 className="text-md font-bold text-gray-800 leading-snug mb-3">
                    {service.title}
                </h3>
                <div className="flex flex-col items-center mb-3">
                    {isPremium && (
                        <span className="text-xs text-gray-500 line-through">
                            MRP: ₹{mrpPaid}
                        </span>
                    )}
                    {isFree && (
                        <span className="text-xs text-gray-500 line-through">
                            Value: ₹{service.price.toFixed(2)}
                        </span>
                    )}
                    <span className={`text-xl font-extrabold ${isFree ? 'text-green-600' : 'text-red-600'}`}>
                        {isFree ? 'FREE' : `₹${currentPrice}`}
                    </span>
                </div>
                <button
                    onClick={() => console.log(`Get Now: ${service.title}`)}
                    className={`w-full py-2 text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer
                        ${isFree
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-orange-500 text-white hover:bg-orange-600'
                        }`}
                >
                    Get Now
                </button>
            </div>
        </div>
    );
};

// --- STEP 1: Birth Details Form ---
const BirthDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        tob: '',
        pob: '',
        topic: consultationTopics[0],
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(null);

        // Simple validation
        if (!formData.name || !formData.dob || !formData.email || !formData.pob) {
            setMessage({ type: 'error', text: 'Please fill in all required personal details.' });
            return;
        }

        // Pass valid data up to the parent flow component
        onSubmit(formData);
    };

    const inputClasses = "w-full p-3 pl-10 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/90 text-gray-700 placeholder-gray-400";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
    const iconContainerClasses = "absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-orange-600 mb-2">Step 1: Your Details</h2>
                <p className="text-lg text-gray-600">Enter your birth details for a precise astrological reading.</p>
            </div>

            {/* --- Personal Details Section --- */}
            <h3 className="text-xl font-bold text-red-600 border-b pb-2 mb-4">Personal & Birth Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative flex flex-col">
                    <label
                        htmlFor="name"
                        className={`${labelClasses} block mb-1 text-sm font-medium text-gray-700`}
                    >
                        Full Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g., Jane Doe"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="relative flex flex-col">
                    <label
                        htmlFor="email"
                        className={`${labelClasses} block mb-1 text-sm font-medium text-gray-700`}
                    >
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MailIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                            required
                        />
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date of Birth */}
                <div className="relative flex flex-col">
                    <label
                        htmlFor="dob"
                        className={`${labelClasses} block mb-1 text-sm font-medium text-gray-700`}
                    >
                        Date of Birth
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CalendarIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                            required
                        />
                    </div>
                </div>

                {/* Time of Birth */}
                <div className="relative flex flex-col">
                    <label
                        htmlFor="tob"
                        className={`${labelClasses} block mb-1 text-sm font-medium text-gray-700`}
                    >
                        Time of Birth (IST)
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <ClockIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="time"
                            id="tob"
                            name="tob"
                            value={formData.tob}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                        />
                    </div>
                </div>

                {/* Place of Birth */}
                <div className="relative flex flex-col">
                    <label
                        htmlFor="pob"
                        className={`${labelClasses} block mb-1 text-sm font-medium text-gray-700`}
                    >
                        Place of Birth
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPinIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="pob"
                            name="pob"
                            value={formData.pob}
                            onChange={handleChange}
                            placeholder="e.g., New Delhi, India"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                            required
                        />
                    </div>
                </div>
            </div>


            {/* --- Consultation Topic Section --- */}
            <h3 className="text-xl font-bold text-red-600 border-b pb-2 mb-4 pt-4">Select Topic</h3>

            <div className="relative flex flex-col">
                <label
                    htmlFor="topic"
                    className={`${labelClasses} block mb-1 text-sm font-medium text-gray-700`}
                >
                    Primary Consultation Area
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BookIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-gray-800 
                 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                 appearance-none bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        {consultationTopics.map((topic) => (
                            <option
                                key={topic}
                                value={topic}
                                className="cursor-pointer hover:bg-gray-200"
                            >
                                {topic}
                            </option>
                        ))}
                    </select>
                </div>
            </div>



            {/* --- Navigation Button and Message --- */}
            <div className="pt-4">
                <button
                    type="submit"
                    className="w-full py-4 bg-red-600 text-white text-xl font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center cursor-pointer"
                >
                    Proceed to Time Slot Selection
                    <ChevronRightIcon className="w-6 h-6 ml-3" />
                </button>
            </div>

            {message && (
                <div className={`p-4 rounded-lg text-center font-semibold bg-red-100 text-red-700`}>
                    {message.text}
                </div>
            )}
        </form>
    );
};


// --- STEP 2: Time Slot Scheduler ---
const TimeSlotScheduler = ({ onSlotSelect, onBack }) => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedAstrologerId, setSelectedAstrologerId] = useState(astrologerSchedule[0].id);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const availableSlots = useMemo(() => {
        // Find the selected astrologer and return their mock slots
        const astrologer = astrologerSchedule.find(a => a.id === selectedAstrologerId);
        return astrologer ? astrologer.slots : [];
    }, [selectedAstrologerId, selectedDate]);


    const handleFinalSubmit = () => {
        if (!selectedSlot) return;

        setIsSubmitting(true);
        setMessage(null);

        const astrologerInfo = astrologerSchedule.find(a => a.id === selectedAstrologerId);

        // Simulate final booking confirmation / redirect to payment
        setTimeout(() => {
            onSlotSelect({
                date: selectedDate,
                time: selectedSlot,
                astrologer: astrologerInfo.name
            });
            setIsSubmitting(false);
        }, 1500);
    };


    const AstrologerCard = ({ astrologer }) => (
        <button
            type="button"
            onClick={() => {
                setSelectedAstrologerId(astrologer.id);
                setSelectedSlot(null); // Reset slot when astrologer changes
            }}
            className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${selectedAstrologerId === astrologer.id
                ? 'bg-red-100 border-red-500 shadow-md transform scale-[1.02]'
                : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
        >
            <div className="flex justify-between items-center">
                <p className="font-bold text-gray-800 text-lg">{astrologer.name}</p>
                <div className="flex items-center text-yellow-600 font-semibold text-sm">
                    <StarIcon className="w-4 h-4 mr-1 fill-current" />
                    {astrologer.rating}
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">Expert in: {astrologer.expertise}</p>
        </button>
    );

    return (
        <div className="space-y-8">
            {/* Step 2 Header */}
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-orange-600 mb-2">Step 2: Schedule Session</h2>
                <p className="text-lg text-gray-600">Choose your preferred astrologer and time slot.</p>
            </div>

            {/* Date Selector */}
            <div className="flex flex-col items-start space-y-2">
                <label htmlFor="bookingDate" className="text-lg font-bold text-red-600">
                    Select Consultation Date
                </label>
                <div className="flex items-center relative w-full sm:w-auto">
                    <CalendarIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 pointer-events-none" />
                    <input
                        type="date"
                        id="bookingDate"
                        value={selectedDate}
                        min={today}
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            setSelectedSlot(null);
                        }}
                        className="w-full sm:w-auto p-3 pl-10 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/90 text-gray-700 font-semibold"
                    />
                </div>
            </div>

            {/* Astrologer Selection */}
            <h3 className="text-xl font-bold text-red-600 border-b pb-2">Select Astrologer</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {astrologerSchedule.map(a => (
                    <AstrologerCard key={a.id} astrologer={a} />
                ))}
            </div>

            {/* Time Slot Selection */}
            <h3 className="text-xl font-bold text-red-600 border-b pb-2 pt-4">Available Slots</h3>
            <div className="flex flex-wrap gap-3 justify-start min-h-[5rem] items-center">
                {availableSlots.length > 0 ? (
                    availableSlots.map(slot => (
                        <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 border-2 flex items-center ${selectedSlot === slot
                                ? 'bg-orange-600 text-white border-orange-700 shadow-lg transform scale-105'
                                : 'bg-yellow-100 text-gray-800 border-yellow-400 hover:bg-yellow-200'
                                }`}
                        >
                            <ClockIcon className='w-4 h-4 mr-2' />
                            {slot}
                        </button>
                    ))
                ) : (
                    <p className="text-gray-500">No slots available for this date/astrologer. Try another day.</p>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-6 py-2 text-lg font-semibold rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors flex items-center"
                >
                    &larr; Back
                </button>
                <button
                    type="button"
                    onClick={handleFinalSubmit}
                    disabled={!selectedSlot || isSubmitting}
                    className="px-8 py-3 bg-green-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Confirming...
                        </span>
                    ) : (
                        <>
                            Confirm & Proceed to Payment (₹1299)
                        </>
                    )}
                </button>
            </div>
            {message && (
                <div className={`p-4 rounded-lg text-center font-semibold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                </div>
            )}
        </div>
    );
};


// --- Consultation Flow Wrapper Component ---
const LiveConsultationFlow = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState(null);
    const [bookingData, setBookingData] = useState(null);

    const handleDetailsSubmit = (data) => {
        setUserData(data);
        setStep(2); // Move to Time Slot Selection
    };

    const handleSlotSelection = (data) => {
        setBookingData(data);
        // Step 3: Payment Confirmation / Summary
        setStep(3);
    };

    const handleBack = () => {
        setStep(1); // Go back to details form
        setBookingData(null); // Clear booking data on back
    };

    // Summary component for Step 3
    const BookingSummary = () => (
        <div className="text-center space-y-6">
            <h2 className="text-4xl font-extrabold text-green-600 mb-4">Booking Successful!</h2>
            <p className="text-xl text-gray-700">Your session is confirmed and payment is pending.</p>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-left space-y-3">
                <p className="text-lg font-bold text-green-700 border-b pb-2">Session Details:</p>
                <p><strong>Astrologer:</strong> {bookingData.astrologer}</p>
                <p><strong>Date & Time:</strong> {new Date(bookingData.date).toDateString()} at {bookingData.time} IST</p>
                <p><strong>Topic:</strong> {userData.topic}</p>
                <p><strong>Price:</strong> ₹1299.00</p>
            </div>

            <p className="text-md text-gray-500">
                A confirmation email with the payment link and video call details has been sent to <strong>{userData.email}</strong>.
            </p>
            <button
                onClick={onClose} // Close the modal instead of resetting flow
                className="mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
                Done
            </button>
        </div>
    );


    return (
        <div className="pt-8"> {/* Adjusted padding since the Modal wrapper adds the styling */}
            {step === 1 && <BirthDetailsForm onSubmit={handleDetailsSubmit} />}
            {step === 2 && userData && (
                <TimeSlotScheduler
                    onSlotSelect={handleSlotSelection}
                    onBack={handleBack}
                />
            )}
            {step === 3 && bookingData && <BookingSummary />}
        </div>
    );
};


const Astrology = () => {
    const [filter, setFilter] = useState('all');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // New state for modal

    const filteredServices = useMemo(() => {
        if (filter === 'all') {
            return astrologyServices;
        }
        return astrologyServices.filter(service => service.type === filter);
    }, [filter]);

    const getFilterButtonClass = (buttonFilter) => {
        const baseClasses = "px-6 py-2 border rounded-full font-semibold transition-all duration-200 cursor-pointer";
        if (filter === buttonFilter) {
            return `${baseClasses} bg-orange-500 text-white border-orange-600 shadow-md`;
        } else {
            return `${baseClasses} bg-white text-gray-700 border-gray-300 hover:bg-gray-50`;
        }
    };


    return (
        <div className="overflow-x-hidden min-h-screen font-sans bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200/50">

            <ScrollingTopMarquee pujaData={popularPuja} />

            {/* Hero Section */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 md:px-20 py-24 space-y-4 bg-white/70 shadow-inner backdrop-blur-sm border-b border-yellow-200">
                <div className="text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600 drop-shadow-lg">
                        Unveil Your Destiny
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
                        Tap into the wisdom of the stars with <b>personalized reports and remedies</b> from our panel of verified, top-rated astrologers.
                    </p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)} // Open Modal on click
                        className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                        Book a Live Consultation <VideoIcon className="inline ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* Our Reports Section (NOW WITH WORKING FILTER) */}
            <section className="py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-4xl font-extrabold mb-2 text-red-600">
                        Our Reports
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our Vedic Astrological Reports provide you with the most relevant predictions for your future.
                    </p>

                    <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-4" role="group" aria-label="Filter options">

                        <button
                            type="button"
                            className={getFilterButtonClass('all')}
                            onClick={() => setFilter('all')}
                            aria-pressed={filter === 'all'}
                        >
                            All
                        </button>

                        <button
                            type="button"
                            className={getFilterButtonClass('paid')}
                            onClick={() => setFilter('paid')}
                            aria-pressed={filter === 'paid'}
                        >
                            Paid
                        </button>

                        <button
                            type="button"
                            className={getFilterButtonClass('free')}
                            onClick={() => setFilter('free')}
                            aria-pressed={filter === 'free'}
                        >
                            Free
                        </button>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {filteredServices.length === 0 && (
                        <p className="text-xl text-gray-500 mt-10">No reports found for this filter.</p>
                    )}

                </div>
            </section>

            {/* Latest Blogs / YouTube Videos Section */}
            <section className="py-16 bg-white shadow-inner">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl font-extrabold mb-12 text-red-600">
                        Latest Blogs & Videos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {blogPosts.map(post => (
                            <div key={post.id} className="group bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                {/* Video Thumbnail Area */}
                                <div className="relative h-40 w-full overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/6B46C1/ffffff?text=Video'; }}
                                    />
                                    {/* Play Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                                        <PlayCircleIcon className="w-12 h-12 text-white/90 group-hover:text-white transition-transform duration-300 transform group-hover:scale-110" />
                                    </div>
                                    {/* Duration Tag */}
                                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {post.duration}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="p-4 text-left">
                                    <h3 className="text-md font-semibold text-gray-800 group-hover:text-orange-600 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-12 text-red-600">
                        Client Testimonials
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="relative p-8 bg-white rounded-xl shadow-2xl border border-yellow-200">

                                <QuoteLeftIcon className="w-8 h-8 text-orange-400 opacity-30 absolute top-4 left-4" />

                                {/* Quote */}
                                <p className="text-xl italic text-gray-700 mb-6 relative z-10">
                                    "{testimonial.quote}"
                                </p>

                                {/* Avatar and Name */}
                                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                                    {/* Using a placeholder image for avatar */}
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full border-2 border-orange-500 shadow-md"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/F97316/ffffff?text=U'; }}
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => console.log('CTA: View All Testimonials')}
                        className="mt-12 text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors flex items-center mx-auto"
                    >
                        Read More Testimonials <ChevronRightIcon className="inline ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* Booking Modal (New Element) */}
            <Modal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            >
                <LiveConsultationFlow onClose={() => setIsBookingModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default Astrology;
