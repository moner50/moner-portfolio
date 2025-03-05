import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";  // استيراد ملف التصميم

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
