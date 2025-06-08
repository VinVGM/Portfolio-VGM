import React from "react";
import NavBar from "./sections/navBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

const App = () => {
  return (
  <div className="container max-w-full">
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <section className="min-h-screen"></section>
    <section className="min-h-screen"></section>
    <section className="min-h-screen"></section>

    <section className="min-h-screen"></section>


  </div>
  
  );
};


export default App;