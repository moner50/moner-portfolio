import React from 'react';
import { Hero } from '../components/Hero/index.jsx';
import {Element} from "react-scroll";
import mainDetails from '../data/main-details.json';

function HeroSection() {
    return (
        <Element name='hero'>
            <Hero
            pageTitle= {mainDetails.pageTitle}
            navLinks={[
                { to: "experience", label: "Experience" },
                { to: "skills", label: "Skills" },
                { to: "projects", label: "Projects" }
            ]}
            contactCTAText="Contact Now"
            heroHeading={mainDetails.introHeading}
            heroHighlight={mainDetails.introHeadingHighlight}
            heroDescription={mainDetails.introAbout}
            heroCTAText="Let's. Connect"
            imageSrc={mainDetails.introImage}
            imageAlt="Moner Tantawy - Data Engineer"
            customClassName="additional-classes-if-needed"
        />
        </Element>
    );
}

export default HeroSection;