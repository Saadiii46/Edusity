import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"
import { Gallery } from "./Components/Gallery"
import { NavbarHero } from "./Components/NavbarHero"
import { Program } from "./Components/Program"
import { Testimonials } from "./Components/Testimonials"

 export const Home = () => {

    return <>
    
    <NavbarHero/>
    <Program/>
    <About/>
    <Gallery/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </>
 }