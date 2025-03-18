import React from 'react';


const SkillCard = ({title, icon, color, items}) => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <div className={`bg-${color}-100 p-3 rounded-full`}>
                    <i className={`${icon} text-${color}-600 text-2xl`}></i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor"
                         className={`size-6 text-${color}-600 text-2xl`}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d={icon}/>
                    </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;