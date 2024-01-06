import React from "react";
import HeroPage from "./HeroPage";
import "./index.css";
import About from "./About";
import { useInView } from "react-intersection-observer";
import Toolbox from "./Toolbox";

export default function App() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { nextRef, inView: aboutView } = useInView();
  const navInd = document.querySelector(".nav--indicator");
  const item = document.querySelectorAll(".main--navbar li");
  const sec = document.querySelector(".name--home");
  console.log(aboutView);
  function ind(e) {
    if (navInd) {
      navInd.style.left = e.offsetLeft + "px";
      navInd.style.width = e.offsetWidth + "px";
    }
  }

  React.useEffect(() => {
    if (inView) {
      ind(sec);
    } else if (!aboutView) {
      ind(item[0]);
    }
  }, [inView, aboutView]);
  return (
    <div>
      <div ref={ref}>
        <HeroPage />
      </div>
      <div ref={nextRef}>
        <About />
      </div>
      <Toolbox />
    </div>
  );
}
