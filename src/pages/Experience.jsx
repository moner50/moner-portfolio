import React from 'react';
import ExperienceCard from '../components/Experience/ExperienceCard.jsx';
import { Element } from "react-scroll";

const experiences = [
    {
        "id": 1,
        "role": "Data Analyst",
        "company": "NTI",
        "duration": "2024 - 2025",
        "description": "Used SQL and Python for data extraction, transformation, and analysis.",
        "skills": [
            "SQL",
            "Python"
        ],
        "logo": "https://www.ntiegypt.sci.eg/moodle/pluginfile.php/1/core_admin/logocompact/300x300/1733222082/NTI%20Logo.png"
    },
    {
        "id": 2,
        "role": "Data Engineer",
        "company": "Ministry of Communications",
        "duration": "Jun 2019 - Feb 2020",
        "description": "Developed database systems, optimized performance, and collaborated on data solutions.",
        "skills": [
            "Databases",
            "PowerBI"
        ],
        "logo": "https://cdn1.vc4a.com/media/2022/08/MCIT-Logo-500x322.png"
    }
];

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
