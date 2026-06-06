import React from 'react'
import Hero_image_1 from "../assets/images/Hero_image_1.webp"
import Hero_image_2 from "../assets/images/Hero_image_2.webp"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const Hero = () => {

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };

    const heroSlides = [{
        id: 1,
        image: Hero_image_1,
        heading: "Authentic Bengali Flavors, Served Fresh",
        subHeading: "Experience traditional Bengali recipes crafted with passion and rich flavors.",

    },
    {
        id: 2,
        image: Hero_image_2,
        heading: "A Cozy Dining Experience Awaits",
        subHeading: "Enjoy warm ambience, elegant interiors, and memorable dining moments.",
    },
    ]
    const colorWords = ["Bengali", "Flavors,", "Dining", "Experience"]
    return (
        <section className='w-full h-[70vh] sm:h-screen relative overflow-hidden'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                className='h-full'
            >
                {heroSlides.map((slide) => (

                    <SwiperSlide key={slide.id}>
                        <img src={slide.image} className={`h-full top-0 w-full object-cover absolute inset-0 ${slide.id == 1 ? "object-[70%_25%] sm:object-[center_70%]" : "object-[40%_center]"}`} />
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full z-20'>
                            <div className='flex justify-center '>
                                <h1 className='text-[1.2rem] min-[375px]:text-xl min-[440px]:text-2xl min-[550px]:text-3xl min-[675px]:text-4xl min-[880px]:text-5xl min-[1150px]:text-6xl text-white font-[inter] font-bold text-center drop-shadow-lg'>{slide.heading.split(" ").map((word, index) => (
                                    <span key={index} className={`${colorWords.includes(word) ? "bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent" : ""}`}>
                                        {console.log(word)}
                                        {word}{" "}
                                    </span>
                                ))}</h1>
                            </div>
                            <div className='flex justify-center mt-5 px-1'>
                                <h2 className='text-center font-[inter] tracking-wide font-semibold  text-white text-xs min-[575px]:text-sm min-[700px]:text-base min-[810px]:text-xl drop-shadow-lg'>{slide.subHeading}</h2>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <button onClick={() => handleScroll("booking")} className='px-8 sm:px-10 py-1.5 cursor-pointer hover:scale-105  rounded-lg text-white font-semibold bg-linear-to-r from-orange-500 to-amber-400 font-[inter] text-base sm:text-lg  max-[768px]:active:scale-95 transition duration-300 hover:-translate-y-1'>Book Table</button>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

        </section>
    )
}

export default Hero