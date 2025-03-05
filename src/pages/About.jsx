import React from "react";
import "./About.css"; // استيراد التنسيق

function About() {
  return (
    <section id="about" className="section">
      <div className="about-container">
        <img src="/images/profile.jpg" alt="Moner Tantawy" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a <strong>Computer Science Engineering</strong> graduate specializing in <strong>Data Engineering</strong>. 
            I have expertise in <strong>SQL, Python, Power BI</strong>, and data analysis. 
            I'm also interested in expanding my knowledge in the <strong>banking sector</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
