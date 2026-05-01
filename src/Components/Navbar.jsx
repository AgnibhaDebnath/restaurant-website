import { useState, useEffect } from "react"

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
            label: "Book Table"
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
                <div className="flex justify-between items-center mx-5 min-[990px]:mx-10">
                    <div>
                        <h1 className="font-bold font-[inter] text-2xl min-[420px]:text-3xl min-[520px]:text-4xl text-white"><a href="/">Royal Bengali Kitchen</a></h1>
                    </div>
                    <div className="w-100 min-[990px]:w-120 hidden min-[850px]:block">
                        <ul className="flex gap-10 min-[990px]:gap-15 justify-between items-center">
                            {navItems.map((item) => (
                                <>
                                    {item.label == "Book Table" ? <li className="font-semibold " key={item.label}><button style={{ backgroundColor: "#f59e0b" }} className="px-3 py-1 rounded-lg cursor-pointer text-white">{item.label}</button></li> : <li className="text-white hover:text-[#f59e0b] font-semibold " key={item.label}><button className="cursor-pointer" onClick={() => handleScroll(item.to)}>{item.label}</button></li>}
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className="block min-[850px]:hidden">
                        <button onClick={() => setIsOpen(true)} className="text-white font-bold text-2xl cursor-pointer">☰</button>
                    </div>
                </div>
            </nav>
            {
                isOpen && (
                    <aside className="fixed top-0 z-50 bg-black/90 backdrop-blur-sm  inset-0 h-screen  text-white  flex items-center transition-all duration-300 justify-center min-[850px]:hidden ">
                        <ul className="flex flex-col gap-8 items-center text-xl">
                            {navItems.map((item) => (
                                <>
                                    {item.label == "Book Table" ? <li className="font-semibold " key={item.label}><button style={{ backgroundColor: "#f59e0b" }} className="px-5 py-1.5 rounded-2xl cursor-pointer text-white hover:scale-105 transition duration-300 active:scale-95 ">{item.label}</button></li> : <li className="text-white hover:text-[#f59e0b] font-semibold  active:scale-95" key={item.label}><button className="cursor-pointer active:text-[#f59e0b]" onClick={() => handleScroll(item.to)}>{item.label}</button></li>}
                                </>
                            ))}
                        </ul>
                        <button
                            className="absolute top-20 cursor-pointer z-60 right-5 text-3xl"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                    </aside>
                )
            }
        </>
    )
}

export default Navbar