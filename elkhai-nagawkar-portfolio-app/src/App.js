import React from "react";
import "./index.css";
import HeroPage from "./Sections/HeroPage";
import About from "./Sections/About";
import { useInView } from "react-intersection-observer";
import Toolbox from "./Sections/Toolbox";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import LightDark from "./HelperComponents/lightDarkSVG";

export default function App() {
  const { ref: heroRef, inView: heroView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutView } = useInView({ threshold: 0.7 });
  const { ref: toolboxRef, inView: toolboxView } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: projectsView } = useInView({
    threshold: 0.5,
  });
  const { ref: contactRef, inView: contactView } = useInView();

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
    } else if (contactView) {
      indicatorPos(item[3]);
    }
  }, [heroView, aboutView, toolboxView, projectsView, contactView]);

  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
  });

  const [mode, setMode] = React.useState(false);

  function handleMode() {
    setMode(!mode);
  }

  return (
    <div>
      <div className="cursor"></div>
      <div onClick={handleMode} className="LightDark--div">
        <LightDark darkMode={mode} />
      </div>
      <div className={`heropage--div`} ref={heroRef}>
        <HeroPage darkMode={mode} />
      </div>
      <div className="about--div" ref={aboutRef}>
        <About />
      </div>
      <div className="toolbox--div" ref={toolboxRef}>
        <Toolbox />
      </div>
      <div className="projects--div" ref={projectsRef}>
        <Projects />
      </div>
      <div className="contact--div" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
