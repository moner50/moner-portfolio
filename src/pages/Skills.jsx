import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-10 px-6 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-700 p-2 rounded">Python</span>
          <span className="bg-gray-700 p-2 rounded">SQL</span>
          <span className="bg-gray-700 p-2 rounded">Power BI</span>
          <span className="bg-gray-700 p-2 rounded">Excel</span>
          <span className="bg-gray-700 p-2 rounded">Pandas</span>
          <span className="bg-gray-700 p-2 rounded">NumPy</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
