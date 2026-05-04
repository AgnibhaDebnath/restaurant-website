
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FcAlarmClock } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const Contact = () => {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    return (
        <section id="contact" className='font-[inter] bg-gray-50 pb-10'>
            <div className='flex justify-center py-5'>
                <h1 className='text-center font-black text-4xl min-[500px]:text-5xl'>Book Your Table</h1>
            </div>
            <div className='flex justify-center py-3 px-1'>
                <h2 className='font-semibold text-center text-base min-[435px]:text-lg min-[490px]:text-xl text-gray-600'>Reserve your seat and enjoy authentic Bengali flavors</h2>
            </div>
            <div className='w-full flex flex-col items-center gap-20 min-[912px]:gap-0 min-[912px]:flex-row min-[912px]:justify-between py-4 px-2'>
                <div className='min-[750px]:w-1/2 flex justify-center'>

                    <form className="flex flex-col gap-4 shadow-xl  bg-white hover:shadow-2xl p-10 min-[480px]:p-20 rounded-3xl items-center">

                        <input className='w-63 min-[390px]:w-70 border pl-4 py-1.5 rounded-2xl focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] border-gray-500 pb-2 shadow-sm' placeholder="Name" />
                        <input className='w-63 min-[390px]:w-70 border pl-4 py-1.5 rounded-2xl focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] border-gray-500 pb-2 shadow-sm' placeholder="Phone Number" />
                        <div className="relative">
                            <DatePicker minDate={new Date()} isClearable placeholderText="Date" className="w-63 min-[390px]:w-70 border pl-4 py-1.5 rounded-2xl focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] border-gray-500 pb-2 shadow-sm cursor-pointer" dateFormat="MMMM d, yyyy" selected={date} onChange={(date) => setDate(date)} />
                            <FaCalendarAlt className="absolute right-3.5 top-2.5 text-gray-500 pointer-events-none" size={20} />
                        </div>
                        <div className="w-63 min-[390px]:w-70 relative">
                            <select className="w-full border rounded-2xl px-4 py-1.5 appearance-none cursor-pointer border-gray-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-gray-500">
                                <option value="" >Select time</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="7:00 PM">7:00 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                                <option value="10:00 PM">10:00 PM</option>
                            </select>
                            <IoIosArrowDown className="absolute right-3.5 top-2.5 text-gray-500 pointer-events-none" size={20} strokeWidth={5} />
                        </div>
                        <div className="w-63 min-[390px]:w-70 relative">
                            <select className="w-full border rounded-2xl px-4 py-1.5 appearance-none cursor-pointer border-gray-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-gray-500">
                                <option value="" >
                                    Number of people
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5+">5+</option>
                            </select>
                            <IoIosArrowDown className="absolute right-3.5 top-2.5 text-gray-500 pointer-events-none" size={20} strokeWidth={5} />
                        </div>
                        <button className="bg-[#f59e0b] text-white py-1.5 rounded-lg px-8 cursor-pointer ">
                            Book a Table
                        </button>
                    </form>
                </div>
                <div className='flex min-[750px]:w-1/2 min-[750px]:items-center min-[750px]:justify-center flex-col gap-3'>
                    <div className="flex flex-col gap-4 p-2">
                        <p className="text-lg ">< CiLocationOn strokeWidth={2} size={25} className="inline mb-1 mr-2 text-[#f59e0b]" />Kolkata,India</p>
                        <p className="text-lg"><FaPhoneAlt size={23} className="pl-1 inline mb-1 mr-1.5 text-[#f59e0b]" />+91 86952 76026</p>
                        <p className="text-lg"><MdEmail size={23} className="inline mb-1 mr-2 text-[#f59e0b]" />contact@restaurant.com</p>

                        <div className="text-lg ">
                            <p className="font-extrabold">< FcAlarmClock className="inline mb-1 mr-2" size={20} />Opening Hours</p>
                            <p>Mon – Sun: 11:00 AM – 10:30 PM</p>
                        </div>
                        <div className="">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29494.230622370545!2d88.39617941119788!3d22.474944191898533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272368099719d%3A0x68446945318f6d5a!2sKolkata%2C%20West%20Bengal%20700152!5e0!3m2!1sen!2sin!4v1777654672318!5m2!1sen!2sin"
                                className="w-82 h-70 rounded-2xl "
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
