import React, { useState, useMemo } from "react";
import moment from "moment";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Helper function to generate available time slots based on date
const generateTimeSlots = (date) => {
    // No bookings on Sunday (0) or Saturday (6)
    if (date.day() === 0 || date.day() === 6) return [];

    const slots = [
        "08:00 AM",
        "09:30 AM",
        "11:00 AM",
        "01:00 PM",
        "02:30 PM",
        "04:00 PM",
        "05:30 PM",
    ];

    // Simulate unavailable slots on certain dates
    const unavailableSlots = date.date() % 5 === 0 ? ["11:00 AM", "04:00 PM"] : [];

    return slots.map((time) => ({
        time,
        available: !unavailableSlots.includes(time),
    }));
};

const Calendar = ({ onSelectDate, selectedDate, onSelectTime, selectedTime }) => {
    const [currentMonth, setCurrentMonth] = useState(moment());

    const daysInMonth = useMemo(() => {
        const startOfMonth = moment(currentMonth).startOf("month");
        const endOfMonth = moment(currentMonth).endOf("month");
        const days = [];
        let date = moment(startOfMonth);

        const startDayIndex = startOfMonth.day(); // 0 for Sunday, 1 for Monday
        for (let i = 0; i < (startDayIndex === 0 ? 6 : startDayIndex - 1); i++) {
            days.push(null);
        }

        while (date.isSameOrBefore(endOfMonth, "day")) {
            days.push(moment(date));
            date.add(1, "day");
        }

        return days;
    }, [currentMonth]);

    const handlePrevMonth = () => {
        if (currentMonth.clone().subtract(1, "month").isBefore(moment().startOf("month"), "month")) return;
        setCurrentMonth(currentMonth.clone().subtract(1, "month"));
        onSelectDate(null);
        onSelectTime(null);
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.clone().add(1, "month"));
        onSelectDate(null);
        onSelectTime(null);
    };

    const isToday = (date) => date && date.isSame(moment(), "day");
    const isSelected = (date) => date && selectedDate && date.isSame(selectedDate, "day");

    const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];
    const isPastMonth = currentMonth.isBefore(moment(), "month");

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
                <button
                    onClick={handlePrevMonth}
                    disabled={isPastMonth}
                    className={`p-1 rounded-full transition ${isPastMonth ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                        }`}
                >
                    <FaChevronLeft />
                </button>
                <h4 className="text-lg font-bold text-gray-800">{currentMonth.format("MMMM YYYY")}</h4>
                <button
                    onClick={handleNextMonth}
                    className="p-1 rounded-full hover:bg-gray-100 transition"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className="grid grid-cols-7 text-center text-gray-500 font-semibold text-xs mb-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <span key={index} className="h-6 flex items-center justify-center">
                        {day}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {daysInMonth.map((day, index) => {
                    const isDisabled = !day || day.isBefore(moment(), "day");
                    const isWeekend = day && (day.day() === 0 || day.day() === 6);
                    return (
                        <button
                            key={index}
                            onClick={() => day && !isDisabled && onSelectDate(day)}
                            disabled={isDisabled}
                            className={`
                h-8 w-8 flex items-center justify-center rounded-full text-center text-sm transition-all duration-200 
                font-medium
                ${!day && "cursor-default"}
                ${isDisabled || isWeekend ? "text-gray-400 cursor-not-allowed" : "hover:bg-orange-100 text-gray-800"}
                ${isToday(day) && !isDisabled ? "border-2 border-orange-500" : ""}
                ${isSelected(day) ? "bg-orange-600 text-white font-bold shadow-md" : ""}
                ${!day ? "bg-transparent" : ""}
              `}
                        >
                            {day ? day.date() : ""}
                        </button>
                    );
                })}
            </div>

            {selectedDate && (
                <div className="mt-6 border-t pt-4">
                    <p className="font-semibold text-sm mb-3 text-gray-700">
                        Slots for {selectedDate.format("Do MMM")}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {timeSlots.length > 0 ? (
                            timeSlots.map((slot) => (
                                <button
                                    key={slot.time}
                                    onClick={() => slot.available && onSelectTime(slot.time)}
                                    disabled={!slot.available}
                                    className={`
                    px-3 py-1 rounded-md text-xs font-semibold transition-all duration-200 shadow-sm
                    ${selectedTime === slot.time
                                            ? "bg-indigo-700 text-white border-indigo-700 shadow-lg"
                                            : slot.available
                                                ? "bg-white text-gray-800 border border-gray-300 hover:bg-indigo-50"
                                                : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                                        }
                  `}
                                >
                                    {slot.time}
                                </button>
                            ))
                        ) : (
                            <p className="text-red-500 text-sm">
                                No slots available on weekends. Please choose a weekday.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
