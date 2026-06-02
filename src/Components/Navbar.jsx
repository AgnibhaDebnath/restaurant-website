import { useState, useEffect } from "react"
import { LuChefHat } from "react-icons/lu";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            label: "About",
            to: "about"
        },
        {
            label: "Menu",
            to: "menu"
        },
        {
            label: "Contact",
            to: "contact"
        },
        {
            label: "Book Table",
            to: "booking"
        }
    ]
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (
        <>
            <nav className={`fixed font-[inter] text-lg  top-0 z-60 py-5 w-full ${isScrolled ? "bg-black" : " bg-white/10 backdrop-blur-md"} `}>
                <div className="flex justify-between items-center ml-2 mr-5 min-[400px]:mx-5 min-[990px]:mx-10">
                    <div className="flex gap-2 min-[400px]:gap-4 items-center">
                        < LuChefHat className="text-[#f59e0b] text-3xl min-[500px]:text-4xl min-[700px]:text-5xl" />
                        <h1 className="font-bold font-[inter] text-[1.3rem] min-[500px]:text-[1.6rem] min-[700px]:text-[1.9rem] text-white"><a href="/">Royal Bengali Kitchen</a></h1>
                    </div>
                    <div className="w-100 min-[990px]:w-120 hidden min-[930px]:block">
                        <ul className="flex gap-10 min-[990px]:gap-15 justify-between items-center">
                            {navItems.map((item) => (
                                <>
                                    {item.label == "Book Table" ? <li className="font-semibold " key={item.label}><button onClick={() => handleScroll(item.to)} style={{ backgroundColor: "#f59e0b" }} className="px-3 py-1 rounded-xl cursor-pointer text-white hover:scale-105 hover:shadow-lgtransition-all duration-300">{item.label}</button></li> : <li className="text-white hover:text-orange-400 transition-all duration-300 font-semibold hover:-translate-y-px" key={item.label}><button className="cursor-pointer" onClick={() => handleScroll(item.to)}>{item.label}</button></li>}
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className="block min-[930px]:hidden">
                        <button onClick={() => setIsOpen(true)} className="text-white font-bold text-xl min-[480px]:text-2xl cursor-pointer">☰</button>
                    </div>
                </div>
            </nav>

            <>
                {/* Backdrop */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 min-[930px]:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
                {/* Drawer */}
                <aside className={`fixed top-0 right-0 z-60 h-screen w-[80%] max-w-sm bg-[#111111] text-white shadow-2xl transition-transform duration-500 ease-out block min-[930px]:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} `}>

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                        <h2 className="text-xl font-bold font-[inter]">Menu</h2>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-bold cursor-pointer hover:text-[#f59e0b] transition-colors duration-300"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Navigation */}
                    <ul className={`flex flex-col px-6 py-8 gap-6 font-[inter]`}>

                        {navItems.map((item) =>
                            item.label === "Book Table" ? (
                                <li key={item.label} className={`mt-4 font-[inter] transition-all duration-500 ${isOpen
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-3"
                                    }`}
                                    style={{ transitionDelay: "400ms" }}
                                >
                                    <button
                                        onClick={() => {
                                            handleScroll("booking");
                                            setIsOpen(false);
                                        }}
                                        className="w-full bg-[#f59e0b] text-white font-semibold py-3 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ) : (
                                <li className={`ml-1.5 transition-all duration-500 ${isOpen
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-3"
                                    }`}
                                    style={{ transitionDelay: "100ms" }} key={item.label}>
                                    <button
                                        onClick={() => {
                                            handleScroll(item.to);
                                            setIsOpen(false);
                                        }}
                                        className={`text-base font-medium cursor-pointer hover:text-[#f59e0b] hover:translate-x-1 transition-all duration-300`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            )
                        )}

                    </ul>

                    {/* Footer */}
                    <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4 flex gap-2 items-center">
                        < LuChefHat size={20} className="text-[#f59e0b]" />
                        <p className="text-sm text-white/60 font-[inter]">
                            Royal Bengali Kitchen
                        </p>
                    </div>

                </aside>
            </>

        </>
    )
}

export default Navbar