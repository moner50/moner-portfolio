import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/Projects/ProjectCard.jsx';
import ProjectDetails from '../components/Projects/ProjectDetails.jsx';
import {Element} from "react-scroll";

const projectsData = {
    "projects": [
        {
            "id": 1,
            "title": "Bike Sales Analysis",
            "description": "Used Excel for data cleaning and analysis to uncover key sales insights.",
            "category": "Excel",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard1.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_dataanalysis-bikesales-customerinsights-activity-7292638845546749952-TOAz",
            "github_repo": "https://github.com/moner50/Bike-Sales-Analysis",
            "liveUrl": ""
        },
        {
            "id": 2,
            "title": "Data Professional Survey Analysis",
            "description": "Built Power BI dashboards to analyze salary trends and industry challenges.",
            "category": "Power BI",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard2.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_powerbi-dataanalytics-datascience-activity-7295547473798873088-yrO-",
            "github_repo": "https://github.com/moner50/Data_Survey",
            "liveUrl": ""
        },
        {
            "id": 3,
            "title": "Data Professional Survey Analysis",
            "description": "Built Power BI dashboards to analyze salary trends and industry challenges.",
            "category": "Power BI",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard2.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_powerbi-dataanalytics-datascience-activity-7295547473798873088-yrO-",
            "github_repo": "https://github.com/moner50/Data_Survey",
            "liveUrl": ""
        },
        {
            "id": 4,
            "title": "Data Professional Survey Analysis",
            "description": "Built Power BI dashboards to analyze salary trends and industry challenges.",
            "category": "Power BI",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard2.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_powerbi-dataanalytics-datascience-activity-7295547473798873088-yrO-",
            "github_repo": "https://github.com/moner50/Data_Survey",
            "liveUrl": ""
        },
        {
            "id": 5,
            "title": "Data Professional Survey Analysis",
            "description": "Built Power BI dashboards to analyze salary trends and industry challenges.",
            "category": "Power BI",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard2.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_powerbi-dataanalytics-datascience-activity-7295547473798873088-yrO-",
            "github_repo": "https://github.com/moner50/Data_Survey",
            "liveUrl": ""
        },
        {
            "id": 6,
            "title": "Data Professional Survey Analysis",
            "description": "Built Power BI dashboards to analyze salary trends and industry challenges.",
            "category": "Power BI",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard2.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_powerbi-dataanalytics-datascience-activity-7295547473798873088-yrO-",
            "github_repo": "https://github.com/moner50/Data_Survey",
            "liveUrl": ""
        },  
        {
            "id": 7,
            "title": "Data Professional Survey Analysis",
            "description": "Built Power BI dashboards to analyze salary trends and industry challenges.",
            "category": "Power BI",
            "imageUrl": "https://moner50.github.io/moner-portfolio/images/dashboard2.jpg",
            "linkedin_post": "https://www.linkedin.com/posts/moner-tantawy-922b17265_powerbi-dataanalytics-datascience-activity-7295547473798873088-yrO-",
            "github_repo": "https://github.com/moner50/Data_Survey",
            "liveUrl": ""
        },
        
    ]
};

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
