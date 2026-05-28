const Footer = () => {
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-5 font-[inter]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="">
                    <h2 className="text-2xl font-semibold text-white">
                        Royal Bengali Kitchen
                    </h2>
                    <p className="mt-2 text-base tracking-wide">
                        Authentic flavors, crafted with tradition
                    </p>
                </div>


                <div>
                    <h2 className="text-white font-semibold mb-2 text-xl">Quick Links</h2>
                    <ul className="space-y-2 text-lg ml-1.5">
                        <li><button aria-label="Go to About section" onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#f59e0b] font-medium active:scale-95 active:text-[#f59e0b] transition duration-300">About</button></li>
                        <li><button aria-label="Go to Menu section" onClick={() => handleScroll("menu")} className="cursor-pointer hover:text-[#f59e0b] font-medium active:scale-95 active:text-[#f59e0b] transition duration-300">Menu</button></li>
                        <li><button aria-label="Go to Contact section" onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-[#f59e0b] font-medium active:scale-95 active:text-[#f59e0b] transition duration-300">Contact</button></li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-[.9rem] min-[385px]:text-base mt-8 border-t border-gray-700 pt-4">
                © 2026 Royal Bengali Kitchen. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;