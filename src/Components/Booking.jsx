import { useState, useEffect } from "react";
import { FaCalendarAlt, FaUtensils } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { z } from "zod";
import SuccessCard from "./SuccessCard";
const bookingSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Please enter a valid name"),
    phoneNumber: z
        .string()
        .trim()
        .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
    email: z
        .string()
        .trim()
        .email("Please enter a valid email address"),
    selectedDate: z
        .date("Please select a reservation date"),
    selectedTime: z
        .string()
        .min(1, "Please select a reservation time"),
    guests: z
        .string()
        .min(1, "Select number of guests"),
});

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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        selectedDate: null,
        selectedTime: "",
        guests: "",
        specialRequest: ""
    })
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };
    const handleBooking = (e) => {
        e.preventDefault();
        const result = bookingSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                name: fieldErrors.name?.[0],
                email: fieldErrors.email?.[0],
                phoneNumber: fieldErrors.phoneNumber?.[0],
                selectedDate: fieldErrors.selectedDate?.[0],
                selectedTime: fieldErrors.selectedTime?.[0],
                guests: fieldErrors.guests?.[0],
            });

            return;
        }
        console.log("Form submitted");
        setFormSubmitted(true);
        setIsSuccess(true);
        setFormSubmitted(false);
    }
    useEffect(() => {
        if (!isSuccess) return;

        const timer = setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                selectedDate: null,
                selectedTime: "",
                guests: "",
                specialRequest: ""
            })
        }, 7000);

        return () => clearTimeout(timer);
    }, [isSuccess]);

    useEffect(() => {
        if (!isSuccess) return;
        handleScroll("SuccessCard");
    }, [isSuccess]);


    return (
        <section id="booking" className="px-3 min-[400px]:px-5 min-[450px]:px-10 py-10 bg-gray-50 scroll-m-15">
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
            {isSuccess && <SuccessCard date={formData.selectedDate} time={formData.selectedTime} guests={formData.guests} />}
            <div className="flex justify-center">
                <form className="w-full max-w-3xl bg-white rounded-4xl py-12 px-6 min-[400px]:px-8 min-[550px]:px-16 shadow-xl hover:shadow-2xl transition-all duration-300">

                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFormData((prev) => ({ ...prev, name: value }));

                                    if (errors.name) {
                                        const result = bookingSchema.shape.name.safeParse(value);

                                        setErrors(prev => ({
                                            ...prev,
                                            name: result.success
                                                ? undefined
                                                : result.error.issues[0].message,
                                        }));
                                    }
                                }}
                                className={`w-11/12 min-[380px]:w-10/12 border ${errors.name ? "border-red-500" : "border-gray-300"}  rounded-2xl px-4 py-3 ${errors.name ? "focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" : "focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]"}  h-11 font-[inter]`}
                            />
                            {errors.name && <p className="text-xs font-medium ml-3 font-[inter] mt-1 text-red-500">{errors.name}</p>}
                        </div>
                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFormData((prev) => ({ ...prev, email: value }));
                                    if (errors.email) {
                                        const result = bookingSchema.shape.email.safeParse(value);
                                        setErrors(prev => ({
                                            ...prev,
                                            email: result.success
                                                ? undefined
                                                : result.error.issues[0].message,
                                        }));
                                    }
                                }}
                                className={`w-11/12 min-[380px]:w-10/12 border ${errors.email ? "border-red-500" : "border-gray-300"}  rounded-2xl px-4 py-3 ${errors.email ? "focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" : "focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]"}  h-11 font-[inter]`}
                            />

                            {errors.email ? <p className="text-xs font-medium text-red-500 mt-1 ml-3 font-[inter]">
                                {errors.email}
                            </p>
                                : <p className="text-xs text-gray-300 mt-1 ml-3 font-[inter]">
                                    We'll send booking confirmation to your email.
                                </p>
                            }
                        </div>
                        {/* Phone */}
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFormData((prev) => ({ ...prev, phoneNumber: value }));

                                    if (errors.phoneNumber) {
                                        const result = bookingSchema.shape.phoneNumber.safeParse(value);
                                        setErrors(prev => ({
                                            ...prev,
                                            phoneNumber: result.success
                                                ? undefined
                                                : result.error.issues[0].message,
                                        }));
                                    }
                                }}
                                className={`w-11/12 min-[380px]:w-10/12 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}  rounded-2xl px-4 py-3 ${errors.phoneNumber ? "focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" : "focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]"}  h-11 font-[inter]`}
                            />
                            {errors.phoneNumber && <p className="text-xs font-medium text-red-500 mt-1 ml-3 font-[inter]">{errors.phoneNumber}</p>}
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        {/* Date */}
                        <div className="mb-6 md:pr-3">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 font-[inter]">
                                Choose Date
                            </label>

                            <div className="flex justify-start font-[inter] overflow-x-auto gap-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1 py-2">
                                {next7Days.map((day) => (
                                    <button
                                        key={day.label}
                                        type="button"
                                        onClick={() => {
                                            const value = day.value;
                                            setFormData((prev) => ({ ...prev, selectedDate: value }));
                                            if (errors.selectedDate) {
                                                const result = bookingSchema.shape.selectedDate.safeParse(value);
                                                setErrors((prev) => ({ ...prev, selectedDate: result.success ? undefined : error.issues[0].message }))
                                            }
                                        }}
                                        className={`min-w-30 px-5 py-1.5 rounded-xl  text-sm font-medium transition-all duration-300 ${formData.selectedDate?.toDateString() === day.value.toDateString()
                                            ? "bg-linear-to-r from-orange-500 to-amber-400 text-white shadow-md"
                                            : "bg-gray-50 border border-gray-200 hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
                                            }`}
                                    >
                                        {day.label}
                                    </button>
                                ))}
                            </div>
                            {errors.selectedDate && <p className="text-xs font-medium text-red-500 mt-1 ml-3 font-[inter]">{errors.selectedDate}</p>}
                        </div>

                        {/* Time */}
                        <div className="mb-6 md:pl-3 md:border-l">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 font-[inter]">
                                Choose Time
                            </label>

                            <div className="flex justify-start overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-2 font-[inter] px-1 py-2">
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        onClick={() => {
                                            const value = slot;

                                            setFormData((prev) => ({ ...prev, selectedTime: value }));
                                            if (errors.selectedTime) {
                                                const result = bookingSchema.shape.selectedTime.safeParse(value);
                                                setErrors((prev) => ({ ...prev, selectedTime: result.success ? undefined : error.issues[0].message }))
                                            }
                                        }}
                                        className={`min-w-30 rounded-xl py-1.5 text-sm font-medium transition-all duration-300 ${formData.selectedTime === slot
                                            ? "bg-linear-to-r from-orange-500 to-amber-400 text-white shadow-md"
                                            : "bg-gray-50 border border-gray-200 hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
                                            }`}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                            {errors.selectedTime && <p className="text-xs font-medium text-red-500 mt-1 ml-3 font-[inter]">{errors.selectedTime}</p>}
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
                                    onClick={() => {
                                        const value = guest;
                                        setFormData((prev) => ({ ...prev, guests: value }));
                                        if (errors.guests) {
                                            const result = bookingSchema.shape.guests.safeParse(value);
                                            setErrors((prev) => ({ ...prev, guests: result.success ? undefined : error.issues[0].message }))
                                        }
                                    }}
                                    className={`rounded-xl py-2 text-sm font-medium transition-all duration-300 ${formData.guests === guest
                                        ? "bg-linear-to-r from-orange-500 to-amber-400 text-white shadow-md"
                                        : "bg-gray-50 border border-gray-200 hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
                                        }`}
                                >
                                    {guest}
                                </button>
                            ))}
                        </div>
                        {errors.guests && <p className="text-xs font-medium text-red-500 mt-1 ml-3 font-[inter]">{errors.guests}</p>}
                    </div>
                    {/*special request*/}
                    <textarea value={formData.specialRequest} onChange={e => setFormData((prev) => ({ ...prev, specialRequest: e.target.value }))} placeholder="Special request(optional)" className="w-full min-[380px]:w-10/12 [540px]:w-8/12 h-13 border border-gray-300 rounded-2xl px-4 py-3 mb-1 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] font-[inter] text-base"></textarea>
                    {/* CTA */}

                    <button
                        onClick={handleBooking}
                        disabled={formSubmitted}
                        type="submit"
                        className="w-full bg-linear-to-r from-orange-500 to-amber-400 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-99 transition-all duration-300 cursor-pointer"
                    >
                        Book a Table
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Booking;