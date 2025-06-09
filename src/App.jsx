import React from "react";
import NavBar from "./sections/navBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
const App = () => {
  return (
  <div className="container max-w-full">
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />

  </div>
  
  );
};


export default App;