import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FaRupeeSign, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaLock } from 'react-icons/fa';

const FaRupeeSignMock = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-1.8-15.6c-.3-.2-.6-.3-.9-.3-.5 0-.8.2-1.1.5s-.4.9-.4 1.5c0 .5.1 1 .4 1.3.3.4.6.5 1.1.5.3 0 .6-.1.9-.3l.4.9c-.3.2-.6.4-.9.5v.7h-1.5V10h1.5v2.8H7.3v1.5h.9c.2.2.4.3.6.4.2.1.4.1.6.1.4 0 .8-.2 1-.5s.4-.8.4-1.3c0-.5-.1-.9-.4-1.2-.3-.4-.6-.5-1-.5-.3 0-.6.1-.8.2l-.3-.7c.3-.2.6-.3 1-.4v-1.1h1.5V5.2h-1.5V4.4c.3-.2.6-.3.9-.3.2 0 .4 0 .6.1.2 0 .4.1.6.2l.4-1.1zM9.5 7.1c-.2.2-.4.3-.6.3-.2 0-.4-.1-.6-.3-.2-.2-.3-.4-.3-.6s.1-.4.3-.6c.2-.2.4-.3.6-.3.2 0 .4.1.6.3.2.2.3.4.3.6s-.1.4-.3.6z" /></svg>;
const FaCheckCircleMock = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-2-5.4l5.2-5.4-1.5-1.5-3.7 3.8-1.5-1.5-1.5 1.5 3 3z" /></svg>;
const FaUserMock = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 9a7 7 0 1 1 14 0H3z" /></svg>;
const FaEnvelopeMock = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" /></svg>;
const FaPhoneMock = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V3z" /></svg>;
const FaCalendarAltMock = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3H8v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3H2a1 1 0 0 1-1-1V4zM2 7v7h16V7H2zm0 10a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" /></svg>;
const FaMapMarkerAltMock = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20S3 10.875 3 7.5A7 7 0 0 1 10 1a7 7 0 0 1 7 6.5C17 10.875 10 20 10 20zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>;
const FaInfoCircleMock = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-1-8V8a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm-1 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" /></svg>;
const FaLockMock = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a4 4 0 0 0-4 4v2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4zm0 2a2 2 0 0 1 2 2v2H8V6a2 2 0 0 1 2-2z" /></svg>;

// --- Fallback Static Data for Checkout Page ---
const defaultBookingDetails = {
    pujaName: "Satyanarayan Bhagwaan Pooja",
    pujaDate: "October 7, 2025",
    pujaTime: "09:30 AM",
    location: "Pisach Mochan, Kashi, Uttar Pradesh",
    pricing: {
        basePrice: 2501.00,
        prasadTotal: 151.00,
        daanTotal: 501.00,
        grandTotal: 3153.00
    },
    lineItems: [
        { type: 'PUJA', name: "Satyanarayan Bhagwaan Pooja", price: 2501.00, quantity: 1, id: 'base-puja' },
        { type: 'PRASAD', name: "Special Aarti Thali Prasad", price: 151.00, quantity: 1, id: 'p1' },
        { type: 'DAAN_PUNYA', name: "Gau Daan Seva", price: 501.00, quantity: 1, id: 'd1' },
    ],
};

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const bookingDetails = useMemo(() => {
        return location.state?.booking || location.state?.state || defaultBookingDetails;
    }, [location.state]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const { prasadItems, daanItems } = useMemo(() => {
        return {
            prasadItems: bookingDetails.lineItems.filter(item => item.type === 'PRASAD'),
            daanItems: bookingDetails.lineItems.filter(item => item.type === 'DAAN_PUNYA')
        };
    }, [bookingDetails.lineItems]);

    const handlePayment = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            alert('Please fill out all your personal details before proceeding.');
            return;
        }

        if (!selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        const finalBookingData = {
            ...bookingDetails,
            customerInfo: { name, email, phone },
            paymentMethod: selectedPaymentMethod,
            paymentStatus: 'Initiated',
        };

        console.log(`--- Payment Initiated via ${selectedPaymentMethod} ---`);
        console.log("Final Booking Data:", finalBookingData);

        navigate('/booking-confirmation', { state: { booking: finalBookingData } });
    };

    const PaymentGatewayButton = ({ method, color, isSelected }) => (
        <button
            type="button"
            onClick={() => setSelectedPaymentMethod(method)}
            className={`flex items-center justify-center p-4 rounded-lg text-lg font-bold transition-all duration-200 border-2 w-full cursor-pointer
                ${isSelected
                    ? `bg-${color}-500 text-white border-${color}-600 shadow-xl`
                    : `bg-white text-gray-800 border-gray-300 hover:border-${color}-400 hover:shadow-md`
                }`}
        >
            {method}
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
                    Secure Checkout
                </h1>

                <div className="lg:flex lg:gap-8">
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 border border-gray-200">
                            <div className="flex items-center gap-4 text-indigo-600 mb-6 border-b pb-4">
                                <FaCheckCircleMock />
                                <h2 className="text-2xl font-bold">Booking Summary</h2>
                            </div>
                            <p className="text-sm text-gray-500 mb-6">Your selected Puja, date, and add-ons are confirmed. Please review your order below.</p>

                            <div className="space-y-4 border-b pb-6 mb-6 bg-indigo-50 p-4 rounded-xl">
                                <h3 className="text-xl font-bold text-indigo-800">Puja Details</h3>
                                <div className="flex items-center gap-3 text-gray-800">
                                    <FaInfoCircleMock className="text-indigo-600 text-xl flex-shrink-0" />
                                    <p className="font-semibold">{bookingDetails.pujaName}</p>
                                </div>
                                <div className="flex items-center gap-3 text-gray-800">
                                    <FaCalendarAltMock className="text-orange-600 text-xl flex-shrink-0" />
                                    <p className="font-semibold">{bookingDetails.pujaDate} at {bookingDetails.pujaTime}</p>
                                </div>
                                <div className="flex items-center gap-3 text-gray-800">
                                    <FaMapMarkerAltMock className="text-red-600 text-xl flex-shrink-0" />
                                    <p className="font-semibold">{bookingDetails.location}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Itemized Breakdown</h3>
                                <div className="flex justify-between text-gray-700 font-medium">
                                    <span className="text-base">Base Puja ({bookingDetails.pujaName})</span>
                                    <span>₹{bookingDetails.pricing.basePrice.toFixed(2)}</span>
                                </div>

                                {prasadItems.length > 0 && (
                                    <div className="pt-2">
                                        <p className="text-sm font-semibold text-indigo-500">Prasad / Chadawa:</p>
                                        {prasadItems.map(item => (
                                            <div key={item.id} className="flex justify-between text-sm text-gray-600 pl-4">
                                                <span>• {item.name}</span>
                                                <span>₹{item.price.toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {daanItems.length > 0 && (
                                    <div className="pt-2">
                                        <p className="text-sm font-semibold text-indigo-500">Daan Punya Contributions:</p>
                                        {daanItems.map(item => (
                                            <div key={item.id} className="flex justify-between text-sm text-gray-600 pl-4">
                                                <span>• {item.name}</span>
                                                <span>₹{item.price.toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="pt-4 border-t border-dashed mt-4">
                                    <div className="flex justify-between font-extrabold text-3xl text-green-700">
                                        <span>Total Payable:</span>
                                        <span><FaRupeeSignMock className="inline-block align-text-bottom mr-1" />{bookingDetails.pricing.grandTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form onSubmit={handlePayment} className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Personal Details</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                <FaUserMock />
                                            </div>
                                            <input
                                                type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                <FaEnvelopeMock />
                                            </div>
                                            <input
                                                type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                <FaPhoneMock />
                                            </div>
                                            <input
                                                type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                <div className="space-y-4">
                                    <PaymentGatewayButton
                                        method="Stripe"
                                        color="indigo"
                                        isSelected={selectedPaymentMethod === "Stripe"}
                                    />
                                    <PaymentGatewayButton
                                        method="Razorpay"
                                        color="blue"
                                        isSelected={selectedPaymentMethod === "Razorpay"}
                                    />
                                    <PaymentGatewayButton
                                        method="PayPal"
                                        color="yellow"
                                        isSelected={selectedPaymentMethod === "PayPal"}
                                    />
                                    <PaymentGatewayButton
                                        method="Tide"
                                        color="pink"
                                        isSelected={selectedPaymentMethod === "Tide"}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!selectedPaymentMethod || !name || !email || !phone}
                                className={`w-full text-white text-xl font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 shadow-md ${(!selectedPaymentMethod || !name || !email || !phone)
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-green-600 hover:bg-green-700 hover:shadow-lg cursor-pointer'}`}
                            >
                                <FaLockMock className="text-xl" /> Pay Final Amount: ₹{bookingDetails.pricing.grandTotal.toFixed(2)}
                            </button>
                            <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                                <FaLockMock className="inline-block align-middle mr-1" />
                                <p className="text-center">All transactions are encrypted and secure.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;