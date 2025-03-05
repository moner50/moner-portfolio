import React from "react";
import "./Projects.css"; // استيراد التنسيق

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {/* مشروع Excel */}
      <div className="project">
        <h3>Bike Sales Analysis (Excel)</h3>
        <img src="/images/dashboard1.png" alt="Bike Sales Dashboard" className="project-img" />
        <p>Used Excel for data cleaning and analysis to uncover key sales insights.</p>
        <a href="https://github.com/moner50" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      {/* مشروع Power BI */}
      <div className="project">
        <h3>Data Professional Survey Analysis (Power BI)</h3>
        <img src="/images/dashboard2.png" alt="Survey Analysis Dashboard" className="project-img" />
        <p>Built Power BI dashboards to analyze salary trends and industry challenges.</p>
        <a href="https://github.com/moner50" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

    </section>
  );
}

export default Projects;
