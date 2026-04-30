import { useState } from 'react';
import { menuItems } from '../data/menuItems'
const Menu = () => {
    const [category, setCategory] = useState("Popular");
    const categories = ["Popular", ...new Set(menuItems.map((item) => item.category))];

    const getUniqueMenuByCategory = (menuItems, key) => {
        const seenMenu = new Set();
        const result = [];
        for (const item of menuItems) {
            if (result.length === categories.length) break;
            const val = item[key];
            if (!seenMenu.has(val)) {
                seenMenu.add(val);
                result.push(item);
            }
        }
        return result;
    }



    if (category === "Popular") {
        var filteredMenu = getUniqueMenuByCategory(menuItems, 'category');

    } else {
        var filteredMenu = menuItems.filter(item => item.category == category);
    }
    return (
        <section id='menu' className='bg-[#f9fafb] scroll-mt-20 pt-5 pb-8'>
            <div className='flex justify-center py-3'>
                <h1 className=' text-4xl min-[450px]:text-5xl text-center font-bold font-[inter]'>Explore Our Menu</h1>
            </div>
            <div className='flex justify-center font-[inter]'>
                <h2 className='text-lg'>Fresh Bengali Flavors Daily</h2>
            </div>
            <div className='flex gap-5 md:gap-10 min-[845px]:gap-15 justify-start min-[895px]:justify-center mt-2 py-5 mb-2 px-2  overflow-x-auto'>
                {categories.map((item) => (
                    <button onClick={() => setCategory(item)} className={`px-5 py-1.5 cursor-pointer rounded-2xl font-semibold ${category == item ? "bg-[#f59e0b] text-white" : "text-black bg-gray-200 "}  font-[inter] whitespace-nowrap hover:scale-105 transition duration-75`} key={item}>{item}</button>
                ))}
            </div>
            <div className='w-full grid grid-cols-1 min-[988px]:grid-cols-2 min-[1450px]:grid-cols-3 place-items-center justify-items-center gap-10 px-10'>
                {filteredMenu.map((item) => (
                    <>
                        {< div key={item.id} className='relative w-80 min-[385px]:w-90 min-[432px]:w-100 min-[500px]:w-115 rounded-4xl px-7 min-[500px]:px-10 pt-8 pb-3 bg-white shadow-xl overflow-hidden hover:shadow-2xl' >
                            <img src={item.imageURL} alt="Menu img" className='w-full h-45 min-[385px]:h-50 min-[432px]:h-60 object-cover rounded-3xl hover:scale-105 transaction duration-200' />
                            <span className="absolute left-10 top-11 min-[500px]:left-13 bg-[#f59e0b] text-white text-xs px-2 py-1 rounded-xl font-[inter]">
                                {item.category}
                            </span>
                            <div className='py-1 min-[432px]:py-3 flex justify-between pr-4'>
                                <h1 className='font-extrabold text-2xl font-[inter]'>{item.name}</h1>
                                <h1 className='font-bold text-[#f59e0b] font-[inter] text-xl'>{item.price}</h1>
                            </div>
                        </div>}
                    </>
                ))}
            </div>
        </section>
    )
}

export default Menu