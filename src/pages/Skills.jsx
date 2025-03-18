import React from "react";
import SkillsSection from '../components/Skills/SkillsSection.jsx';
import {Element} from "react-scroll";
import skillsData from '../data/skills.json';

function Skills() {
  return (
      <SkillsSection skillsData={skillsData}/>
  );
}

export default Skills;
