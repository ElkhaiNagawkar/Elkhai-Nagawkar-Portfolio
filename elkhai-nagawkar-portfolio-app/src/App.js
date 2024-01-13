import React from "react";
import "./index.css";
import HeroPage from "./Sections/HeroPage";
import About from "./Sections/About";
import { useInView } from "react-intersection-observer";
import Toolbox from "./Sections/Toolbox";
import Projects from "./Sections/Projects";

export default function App() {
  const { ref: heroRef, inView: heroView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutView } = useInView({ threshold: 0.7 });
  const { ref: toolboxRef, inView: toolboxView } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: projectsView } = useInView({
    threshold: 0.2,
  });

  const navInd = document.querySelector(".nav--indicator");
  const item = document.querySelectorAll(".main--navbar li");
  const sec = document.querySelector(".name--home");
  function indicatorPos(e) {
    if (navInd) {
      navInd.style.left = e.offsetLeft + "px";
      navInd.style.width = e.offsetWidth + "px";
    }
  }

  React.useEffect(() => {
    if (heroView) {
      indicatorPos(sec);
    } else if (aboutView) {
      indicatorPos(item[0]);
    } else if (toolboxView) {
      indicatorPos(item[1]);
    } else if (projectsView) {
      indicatorPos(item[2]);
    }
  }, [heroView, aboutView, toolboxView, projectsView]);
  return (
    <div>
      <div ref={heroRef}>
        <HeroPage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={toolboxRef}>
        <Toolbox />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}
