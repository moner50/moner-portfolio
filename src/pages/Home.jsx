import React, {useEffect} from 'react';
import HeroSection from "./Hero.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import GoToTop from "../components/GoToTop.jsx";

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection />
            <Experience/>
            <Skills />
            <Projects />
            <Contact />
            <GoToTop />
        </>
    );
}

export default Home;