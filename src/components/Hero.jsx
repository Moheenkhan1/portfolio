import React from "react";
import portfolioimage from "../assets/portfolioimage.jpg";
import { Tilt } from "react-tilt";
import ScrollVelocity from '../utils/ScrollVelocity';
import Skills from "../sections/Skills";
import Landing from "../sections/Landing";
import Scrolltext from "../sections/Scrolltext";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

const Hero = () => {
  return (
    <>
    <div className="bg-[#12172a] " >
    <Landing/>
    <Skills />
    <Projects/>
    <Education/>
    <Contact/>
    </div>
    </>
  );
};

export default Hero;
