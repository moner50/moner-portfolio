import React from 'react';

const ExperienceCard = ({ experience }) => {
    const { role, company, duration, description, skills, logo } = experience;

    return (
        <div className="bg-white rounded-lg hover:shadow-md overflow-hidden transition duration-300 border border-gray-200">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-6 flex items-center justify-center">
                    <img
                        src={logo || "https://placehold.co/128"}
                        alt={`${company} logo`}
                        className="w-36 h-36 object-contain"
                    />
                </div>

                <div className="w-full md:w-3/4 py-8 px-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">{role}</h3>
                        <span className="text-sm text-gray-500 mt-1 md:mt-0">{duration}</span>
                    </div>

                    <h4 className="text-lg font-medium text-indigo-600 mb-4">{company}</h4>

                    <p className="text-gray-600 mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;