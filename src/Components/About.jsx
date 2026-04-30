import React from 'react'
import About_section_image from "../assets/images/About_section_image.jpg"
const About = () => {
    return (
        <section className=' font-[inter] pt-5 pb-16'>
            <div className='flex justify-center py-5'>
                <h1 className='text-center text-5xl font-bold '>Our Story</h1>
            </div>
            <div className='flex justify-center py-2  pb-5'>
                <h2 className='text-center text-lg min-[440px]:text-xl text-gray-700 font-semibold'>Authentic flavors, crafted with tradition</h2>
            </div>
            <div className='w-full pl-5 pr-4 min-[600px]:px-10'>
                <div className='flex flex-col min-[906px]:flex-row  min-[906px]:justify-between items-center max-[906px]:gap-5'>
                    <div className='flex flex-col justify-center  pl-0 min-[906px]:pl-5 min-[950px]:pl-10 pr-0 min-[906px]:pr-4 gap-2'>
                        <p className='pl-2 text-base min-[487px]:text-lg min-[1100px]:text-xl max-w-2xl text-gray-600 leading-relaxed'>We bring the rich taste of Bengal to your plate with recipes passed down through generations.</p>

                        <p className='pl-2 text-base min-[487px]:text-lg min-[1000px]:text-xl max-w-2xl text-gray-600 leading-relaxed'>Every dish is prepared using fresh ingredients, traditional spices, and a passion for authentic cooking.</p>
                        <ul className="mt-4 space-y-2 font-medium text-lg flex  gap-3 flex-col  text-gray-600">
                            <li>👨‍🍳 Authentic Recipes</li>
                            <li>🌿 Fresh Ingredients</li>
                            <li>🍛 Traditional Taste</li>
                        </ul>
                    </div>

                    <img src={About_section_image} className='w-90 min-[1100px]:w-100 h-60 min-[1100px]:h-70 object-cover rounded-2xl shadow-2xl  hover:scale-105 transition duration-200' alt="About section image" />
                </div>
            </div>
        </section>
    )
}

export default About