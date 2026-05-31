import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    return (
        <section id="contact" className='font-[inter] bg-orange-50 pb-10 scroll-m-15'>
            <div className='flex justify-center py-5'>
                <h1 className='text-center font-black text-3xl sm:text-4xl lg:text-5xl tracking-wide text-gray-900'>Contact Us</h1>
            </div>
            <div className='flex justify-center py-3 px-1'>
                <h2 className='font-semibold text-center tracking-wide text-base min-[435px]:text-lg min-[490px]:text-xl text-gray-700'>Experience authentic Bengali hospitality with every visit</h2>
            </div>
            <div className='w-full flex items-center '>

                <div className='w-full max-w-5xl mx-auto bg-white rounded-4xl shadow-lg p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className="flex max-[450px]:items-start max-[1024px]:items-center flex-col justify-center">
                        <div className="flex flex-col gap-6 ">
                            <div className="flex gap-2 max-[450px]:pl-5">
                                <div >
                                    <div className=" rounded-2xl bg-[#f59e0b] flex justify-center items-center w-13 h-13">
                                        < CiLocationOn strokeWidth={2} size={25} className=" text-gray-100" />
                                    </div>
                                </div>
                                <div>
                                    <div className="h-3.5"></div>
                                    <div>
                                        <div className="flex flex-col">
                                            <p className="text-gray-600">Address</p>
                                        </div>


                                        <div >
                                            <p className="text-lg font-medium">Kolkata, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 max-[450px]:pl-5">
                                <div className="rounded-2xl bg-[#f59e0b] flex justify-center items-center w-13 h-13">
                                    <FaPhoneAlt size={20} className="text-gray-100" />
                                </div>
                                <div>
                                    <div className="h-3.5"></div>
                                    <div>
                                        <div>
                                            <p className="text-gray-600">Phone</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">+91 86952 76026</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 max-[450px]:pl-5">
                                <div className="rounded-2xl bg-[#f59e0b] flex justify-center items-center w-13 h-13">
                                    <MdEmail size={25} className="text-gray-100" />
                                </div>
                                <div>
                                    <div className="h-3.5"></div>
                                    <div>
                                        <div>
                                            <p className="text-gray-600">Email</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">contact@restaurant.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 max-[450px]:pl-5">
                                <div className="rounded-2xl bg-[#f59e0b] flex justify-center items-center w-13 h-13">
                                    < LuAlarmClock size={25} strokeWidth={2} className="text-gray-100" />
                                </div>
                                <div>
                                    <div className="h-3.5"></div>
                                    <div>
                                        <p className="text-gray-600 ">Opening Hours</p>
                                        <p className="text-lg font-medium">Mon – Sun</p>
                                        <div className="px-3 py-1 text-green-600 bg-green-100 rounded-3xl">11:00 AM - 10:30 PM</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29494.230622370545!2d88.39617941119788!3d22.474944191898533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272368099719d%3A0x68446945318f6d5a!2sKolkata%2C%20West%20Bengal%20700152!5e0!3m2!1sen!2sin!4v1777654672318!5m2!1sen!2sin"
                            className="w-77 h-60 min-[400px]:w-85 min-[400px]:h-72 rounded-2xl"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
