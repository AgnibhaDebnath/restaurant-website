import { LuChefHat } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
const Footer = () => {
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (
        <footer className="bg-gray-900 text-gray-300 py-14 px-3 min-[400px]:px-5 font-[inter]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        < LuChefHat size={40} className="text-[#f59e0b]" />
                        <h2 className="text-2xl font-semibold text-white">
                            Royal Bengali Kitchen
                        </h2>
                    </div>

                    <p className="mt-2 text-base tracking-wide pl-13">
                        Authentic flavors, crafted with tradition
                    </p>
                    <div className="flex gap-5 pl-13 items-center text-white/80">
                        <RiInstagramLine size={22} className="cursor-pointer hover:text-orange-400 transition-all duration-300" />
                        <FaXTwitter size={22} className="cursor-pointer hover:text-orange-400" />
                        <RiYoutubeLine size={26} className="cursor-pointer hover:text-orange-400" />
                    </div>
                </div>


                <div className="pl-12">

                    <h2 className="text-white font-semibold text-xl mt-2">Quick Links</h2>

                    <ul className="space-y-2 text-base sm:text-lg ml-1.5 mt-1">
                        <li><button aria-label="Go to About section" onClick={() => handleScroll("about")} className="cursor-pointer hover:text-[#f59e0b] font-medium active:scale-95 active:text-[#f59e0b] transition duration-300">About</button></li>
                        <li><button aria-label="Go to Menu section" onClick={() => handleScroll("menu")} className="cursor-pointer hover:text-[#f59e0b] font-medium active:scale-95 active:text-[#f59e0b] transition duration-300">Menu</button></li>
                        <li><button aria-label="Go to Contact section" onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-[#f59e0b] font-medium active:scale-95 active:text-[#f59e0b] transition duration-300">Contact</button></li>
                    </ul>
                </div>

            </div>

            <div className="flex items-center justify-center text-[.9rem] min-[385px]:text-base mt-8 border-t border-gray-700 pt-4">
                <h3>© {new Date().getFullYear()} Royal Bengali Kitchen. All rights reserved.</h3>
            </div>
        </footer>
    )
}
export default Footer;