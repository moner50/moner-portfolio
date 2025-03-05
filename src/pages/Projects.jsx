import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid gap-6">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-xl font-semibold">Global Layoffs Analysis</h3>
            <p>Analyzed layoffs data (2020–2023) using SQL, data cleaning, and trend analysis.</p>
            <a href="https://github.com/moner50/layoffs-data-analysis" className="text-blue-400">View on GitHub</a>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-xl font-semibold">Bike Sales Analysis</h3>
            <p>Used Excel for data cleaning and analysis to uncover key sales insights.</p>
            <a href="https://github.com/moner50/Bike-Sales-Analysis" className="text-blue-400">View on GitHub</a>
          </div>

          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-xl font-semibold">Data Professional Survey Analysis</h3>
            <p>Built Power BI dashboards to analyze salary trends and industry challenges.</p>
            <a href="https://github.com/moner50/Data_Survey" className="text-blue-400">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
