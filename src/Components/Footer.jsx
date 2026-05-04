const Footer = () => {
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (


        <footer className="bg-gray-900 text-gray-300 py-10 px-5 font-[inter]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Royal Bengali Kitchen
                    </h2>
                    <p className="mt-2 text-sm">
                        Authentic flavors, crafted with tradition
                    </p>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><button onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#f59e0b]">About</button></li>
                        <li><button onClick={() => handleScroll("menu")} className="cursor-pointer hover:text-[#f59e0b]">Menu</button></li>
                        <li><button onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-[#f59e0b]">Contact</button></li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                © 2026 Royal Bengali Kitchen. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;