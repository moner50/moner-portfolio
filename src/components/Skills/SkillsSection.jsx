import React from 'react';
import SkillCard from './SkillsCard.jsx';
import { Element } from 'react-scroll';

const SkillsSection = ({ skillsData }) => {
    return (
        <Element name={'skills'}>
            <section className="py-[5rem] md:py-16 lg:py-32 border-t border-gray-200 min-h-[100dvh] bg-gray-50 flex items-center justify-center">
                <div className="container w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">
                            Technical Skills
                        </h2>
                        <p className="text-gray-600 text-lg">Tools and technologies I work with</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillsData.map((skill, index) => (
                            <SkillCard
                                key={index}
                                title={skill.title}
                                icon={skill.icon}
                                color={skill.color}
                                items={skill.items}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default SkillsSection;
