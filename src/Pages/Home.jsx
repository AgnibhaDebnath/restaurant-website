import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Menu from "../Components/Menu"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home