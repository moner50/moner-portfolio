import React from 'react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={() => onClick(project)}
            style={{ backgroundImage: `url('${project.imageUrl}')` }}
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-86 md:h-96 group"
        >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/75 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    {project.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-indigo-400 font-semibold uppercase">
                    {project.category}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;