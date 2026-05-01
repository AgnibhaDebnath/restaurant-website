import React from 'react'
import Hero_image from "../assets/images/Hero_image.jpg"
const Hero = () => {
    return (
        <section className='w-full h-screen relative'>


            <img src={Hero_image} className='h-full top-0 w-full object-cover object-center' />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full '>
                <div className='flex justify-center '>
                    <h1 className='text-[1.2rem] min-[375px]:text-xl min-[440px]:text-2xl min-[550px]:text-3xl min-[675px]:text-4xl min-[880px]:text-5xl min-[1150px]:text-6xl text-white font-[inter] font-bold text-center'>Authentic Bengali Flavors, Served Fresh</h1>
                </div>
                <div className='flex justify-center mt-5 px-1'>
                    <h2 className='text-center font-semibold text-white text-xs min-[575px]:text-sm min-[700px]:text-base min-[810px]:text-lg font-[inter]'>Experience traditional recipes made with love. Book your table and enjoy a true taste of Bengal.</h2>
                </div>
                <div className='flex justify-center mt-5'>
                    <button className='px-10 py-1.5 cursor-pointer hover:scale-105  rounded-lg text-white font-semibold bg-[#f59e0b] font-[inter] text-lg active:scale-95 transition duration-300'>Book Table</button>
                </div>
            </div>
        </section>
    )
}

export default Hero