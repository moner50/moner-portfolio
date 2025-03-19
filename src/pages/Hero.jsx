import React from 'react';
import { Hero } from '../components/Hero/index.jsx';
import {Element} from "react-scroll";

const mainDetails = {
    "pageTitle": "Moner Tantawy",
    "introImage": "/moner-portfolio/images/profile.png",
    "introHeading": "Transforming Data into",
    "introHeadingHighlight": "Business Insights",
    "introAbout": "I'm a Computer Science Engineering graduate specializing in Data Engineering. I have expertise in SQL, Python, Power BI, and data analysis. I'm also interested in expanding my knowledge in the banking sector."
};

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
