import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProjects from "./pages/AllProjects.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/moner-portfolio" element={<Home />} />
            <Route path="/moner-portfolio/projects" element={<AllProjects />} />
        </Routes>
    </Router>
  );
}

export default App;
