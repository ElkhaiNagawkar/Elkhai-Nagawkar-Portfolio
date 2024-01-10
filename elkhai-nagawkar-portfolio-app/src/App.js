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
  const { ref: ToolboxRef, inView: ToolboxView } = useInView({
    threshold: 0.5,
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
    } else if (ToolboxView) {
      indicatorPos(item[1]);
    }
  }, [heroView, aboutView, ToolboxView]);
  return (
    <div>
      <div ref={heroRef}>
        <HeroPage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={ToolboxRef}>
        <Toolbox />
      </div>
      <Projects />
    </div>
  );
}
