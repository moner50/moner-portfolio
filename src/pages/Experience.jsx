import React from 'react';
import ExperienceCard from '../components/Experience/ExperienceCard.jsx';
import { Element } from "react-scroll";
import experiences from '../data/experiences.json';

const Experience = () => {
  return (
      <Element name="experience">
        <section id={'experience'} className="py-[5rem] md:py-16 lg:py-32 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">Experience</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              My journey through various roles has equipped me with a diverse skill set.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-[80%] mx-auto">
              {experiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </section>
      </Element>
  );
};

export default Experience;