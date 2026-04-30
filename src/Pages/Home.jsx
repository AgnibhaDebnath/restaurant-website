import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Menu from "../Components/Menu"

const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
        </>
    )
}

export default Home