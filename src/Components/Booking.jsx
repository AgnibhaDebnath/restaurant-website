import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaCalendarAlt, FaUtensils } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const timeSlots = [
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
];

const next7Days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return {
        value: date,
        label:
            index === 0
                ? "Today"
                : index === 1
                    ? "Tomorrow"
                    : date.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                    }),
    };
});
const guestOptions = ["1", "2", "3", "4", "5", "6+"];

const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState("");
    const [specialRequest, setSpecialRequest] = useState("");

    const handleBooking = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <section className="px-3 min-[400px]:px-5 min-[450px]:px-10 py-10 bg-gray-50">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    ────   < FaUtensils size={30} /> ────
                </div>

                <p className="text-[#f59e0b] font-[inter] font-semibold tracking-wide uppercase">
                    Table Reservation
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 font-[inter]">
                    Reserve Your <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Dining Experience</span>
                </h2>

                <p className="text-gray-600 text-base font-medium max-w-2xl mx-auto mt-4 leading-relaxed font-[inter]">
                    Book your table in advance and enjoy authentic Bengali cuisine,
                    exceptional hospitality, and a memorable dining experience.
                </p>
            </div>
            <div className="flex justify-center">
                <form className="w-full max-w-3xl bg-white rounded-4xl py-12 px-6 min-[400px]:px-8 min-[550px]:px-16 shadow-xl hover:shadow-2xl transition-all duration-300">

                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-11/12 min-[380px]:w-10/12 border border-gray-300 rounded-2xl px-4 py-3 mb-4 focus:outline-none focus:border-[#f59e0b] h-11 focus:ring-1 focus:ring-[#f59e0b] font-[inter]"
                        />

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-11/12 min-[380px]:w-10/12 h-11 border border-gray-300 rounded-2xl px-4 py-3 mb-1 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] font-[inter]"
                            />

                            <p className="text-xs text-gray-300 mb-4 ml-3 font-[inter]">
                                We'll send booking confirmation to your email.
                            </p>
                        </div>
                        {/* Phone */}

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-11/12 min-[380px]:w-10/12 border border-gray-300 rounded-2xl px-4 py-3 mb-6 focus:outline-none h-11  focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] font-[inter]"
                        />


                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Date */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 font-[inter]">
                                Choose Date
                            </label>

                            <div className="flex justify-start font-[inter] overflow-x-auto gap-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1 py-2">
                                {next7Days.map((day) => (
                                    <button
                                        key={day.label}
                                        type="button"
                                        onClick={() => setSelectedDate(day.value)}
                                        className={`min-w-30 px-5 py-1.5 rounded-xl  text-sm font-medium transition-all duration-300 ${selectedDate?.toDateString() === day.value.toDateString()
                                            ? "bg-linear-to-r from-orange-500 to-amber-400 text-white shadow-md"
                                            : "bg-gray-50 border border-gray-200 hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
                                            }`}
                                    >
                                        {day.label}
                                    </button>
                                ))}
                            </div>

                        </div>

                        {/* Time */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 font-[inter]">
                                Choose Time
                            </label>

                            <div className="flex justify-start overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-2 font-[inter] px-1 py-2">
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        onClick={() => setSelectedTime(slot)}
                                        className={`min-w-30 rounded-xl py-1.5 text-sm font-medium transition-all duration-300 ${selectedTime === slot
                                            ? "bg-linear-to-r from-orange-500 to-amber-400 text-white shadow-md"
                                            : "bg-gray-50 border border-gray-200 hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
                                            }`}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Guests */}

                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 font-[inter]">
                            Number of Guests
                        </label>

                        <div className="grid grid-cols-3 gap-2 font-[inter]">
                            {guestOptions.map((guest) => (
                                <button
                                    key={guest}
                                    type="button"
                                    onClick={() => setGuests(guest)}
                                    className={`rounded-xl py-2 text-sm font-medium transition-all duration-300 ${guests === guest
                                        ? "bg-linear-to-r from-orange-500 to-amber-400 text-white shadow-md"
                                        : "bg-gray-50 border border-gray-200 hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
                                        }`}
                                >
                                    {guest}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/*special request*/}
                    <textarea value={specialRequest} onChange={e => setSpecialRequest(e.target.value)} placeholder="Special request(optional)" className="w-full min-[380px]:w-10/12 [540px]:w-8/12 h-13 border border-gray-300 rounded-2xl px-4 py-3 mb-1 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] font-[inter] text-base"></textarea>
                    {/* CTA */}

                    <button
                        onClick={handleBooking}
                        type="submit"
                        className="w-full bg-linear-to-r from-orange-500 to-amber-400 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                        Book a Table
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Booking;