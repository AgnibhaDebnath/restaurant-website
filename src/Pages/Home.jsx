import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Menu from "../Components/Menu"
import About from "../Components/About"
const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <About />
        </>
    )
}

export default Home