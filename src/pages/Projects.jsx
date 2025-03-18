import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/Projects/ProjectCard.jsx';
import ProjectDetails from '../components/Projects/ProjectDetails.jsx';
import {Element} from "react-scroll";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const latestProjects = projectsData.projects.slice(0, 6);
    const isProjectsLessThanSix = latestProjects.length < 6;

    return (
        <Element name={"projects"}>
            <section className="min-h-[100dvh] py-[5rem] md:py-16 lg:py-32 border-t border-b border-gray-200">
            <div className="container px-6 mx-auto">
                 <div className="text-center mb-12">
                     <h1 className="py-1 font-bold text-gray-800 capitalize text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">
                         My Projects
                     </h1>
                 </div>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {latestProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                {selectedProject && (
                    <ProjectDetails
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}

                {
                    !isProjectsLessThanSix && (
                        <div className="flex justify-center items-center mt-12">
                            <Link
                                to="/projects"
                                className="inline-block px-12 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                All projects
                            </Link>
                        </div>
                    )
                }
            </div>

            </section>
        </Element>
    );
};

export default Projects;