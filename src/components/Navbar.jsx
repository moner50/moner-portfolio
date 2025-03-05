import React from "react";
import "./Navbar.css"; // استيراد التنسيق

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Moner Tantawy</h1>
      <div>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
