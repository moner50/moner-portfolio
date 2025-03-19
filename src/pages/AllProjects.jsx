import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import ProjectDetails from "../components/Projects/ProjectDetails.jsx";
import projectData from './Projects.jsx';

function AllProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col bg-indigo-50">
                <header className="bg-white shadow-md h-[15vh] min-h-[100px] flex items-center justify-between px-6 fixed w-full z-10">
                    <h1 className="text-3xl font-bold text-indigo-600">Moner Tantawy</h1>
                    <Link
                        to="/"
                        className="bg-indigo-600 text-white flex items-center px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Back to Home
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="ml-1 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </Link>
                </header>

                <main className="flex-1 mt-[15vh] min-h-[calc(85vh-100px)] overflow-y-auto p-8">
                    <div className="max-w-6xl mx-auto">
                        <section
                            className="min-h-[100dvh] py-6">
                            <div className="container px-6 mx-auto">
                                <h1 className="text-center py-1 font-bold text-gray-800 capitalize text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">
                                    My Projects
                                </h1>
                                    <div
                                        className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                        {projectData.projects.map((project) => (
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

                                </div>

                        </section>


                    </div>
                </main>
            </div>
        </>
);
}

export default AllProjects;
