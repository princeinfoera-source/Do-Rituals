import React, { useState } from "react";

const AstrologyServiceDetail = () => {
    const [form, setForm] = useState({
        name: "",
        gender: "",
        dob: "",
        birthTime: "",
        birthTimeMeridian: "AM",
        placeOfBirth: "",
        maritalStatus: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleGenderSelect = (gender) => {
        setForm((prev) => ({ ...prev, gender }));
    };

    const handleMaritalSelect = (status) => {
        setForm((prev) => ({ ...prev, maritalStatus: status }));
    };

    const handleMeridianSelect = (meridian) => {
        setForm((prev) => ({ ...prev, birthTimeMeridian: meridian }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add further submit logic here
        alert("Continue clicked with form data: " + JSON.stringify(form));
    };

    return (
        <div className="min-h-screen p-6 md:p-12 flex flex-col md:flex-row max-w-6xl mx-auto gap-10">
            {/* Left side content */}
            <div className="flex-1 flex flex-col gap-6">
                <h1 className="text-3xl font-normal leading-relaxed">
                    Premium Life Kundali <br />
                    Report With 1 Year <br />
                    Prediction
                </h1>
                <p className="text-sm text-gray-700 max-w-md leading-relaxed">
                    Premium Life Kundali Report provides an in-depth look into your unique
                    birth chart, revealing key aspects of your personality and life’s
                    direction. Tailored to provide clarity, it serves as a roadmap for
                    navigating important life events, ensuring you make informed decisions
                    at every step.
                </p>
                <ul className="list-disc list-inside text-sm max-w-md space-y-1 text-gray-700">
                    <li>Present + 1 Year prediction</li>
                    <li>All Important Charts & Tables</li>
                    <li>Key traits based on Lagna, Rashi & Birth Nakshatra</li>
                    <li>Prediction based on planetary positions & Dasha</li>
                    <li>Yoga & Dosh in Kundali</li>
                    <li>Remedies</li>
                </ul>
                <div className="flex items-center gap-8">
                    <div className="w-20 h-20 border border-gray-400 flex items-center justify-center text-gray-600">
                        IMAGE
                    </div>
                    <div className="text-gray-500 text-sm">
                        <div className="line-through decoration-red-500">MRP - ₹501.00</div>
                        <div>You Saved ₹100</div>
                        <div className="text-2xl font-semibold mt-1">₹401.00 /-</div>
                    </div>
                </div>
            </div>

            {/* Right side form */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 border border-gray-300 p-6 rounded-md max-w-md"
            >
                <h2 className="text-sm font-bold mb-4">
                    Enter Accurate Details for PRECISE PREDICTION
                </h2>
                <div className="flex flex-col mb-4">
                    <label className="text-xs mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name..."
                        className="border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="mb-4">
                    <div className="text-xs mb-1">Gender</div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => handleGenderSelect("Male")}
                            className={`border px-3 py-1 text-sm rounded ${form.gender === "Male"
                                    ? "bg-indigo-100 border-indigo-600"
                                    : "border-gray-400"
                                }`}
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            onClick={() => handleGenderSelect("Female")}
                            className={`border px-3 py-1 text-sm rounded ${form.gender === "Female"
                                    ? "bg-indigo-100 border-indigo-600"
                                    : "border-gray-400"
                                }`}
                        >
                            Female
                        </button>
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-xs mb-1" htmlFor="dob">
                        Date of Birth
                    </label>
                    <input
                        id="dob"
                        name="dob"
                        type="date"
                        placeholder="DD / MM / YYYY"
                        className="border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        value={form.dob}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-xs mb-1" htmlFor="birthTime">
                        Birth Time
                    </label>
                    <div className="flex gap-2 items-center">
                        <input
                            id="birthTime"
                            name="birthTime"
                            type="time"
                            className="border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            value={form.birthTime}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={() => handleMeridianSelect("AM")}
                            className={`border px-2 py-1 text-xs rounded ${form.birthTimeMeridian === "AM"
                                    ? "bg-indigo-100 border-indigo-600"
                                    : "border-gray-400"
                                }`}
                        >
                            AM
                        </button>
                        <button
                            type="button"
                            onClick={() => handleMeridianSelect("PM")}
                            className={`border px-2 py-1 text-xs rounded ${form.birthTimeMeridian === "PM"
                                    ? "bg-indigo-100 border-indigo-600"
                                    : "border-gray-400"
                                }`}
                        >
                            PM
                        </button>
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-xs mb-1" htmlFor="placeOfBirth">
                        Place of Birth
                    </label>
                    <input
                        id="placeOfBirth"
                        name="placeOfBirth"
                        type="text"
                        placeholder="Enter Your Birth Place"
                        className="border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        value={form.placeOfBirth}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="mb-6">
                    <div className="text-xs mb-1">Marital Status</div>
                    <div className="flex gap-2 flex-wrap">
                        {["Unmarried", "Married", "Divorced", "Widowed"].map((status) => (
                            <button
                                type="button"
                                key={status}
                                onClick={() => handleMaritalSelect(status)}
                                className={`border px-3 py-1 text-xs rounded ${form.maritalStatus === status
                                        ? "bg-indigo-100 border-indigo-600"
                                        : "border-gray-400"
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="border border-gray-500 px-5 py-1 rounded hover:bg-gray-200 transition"
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default AstrologyServiceDetail;
