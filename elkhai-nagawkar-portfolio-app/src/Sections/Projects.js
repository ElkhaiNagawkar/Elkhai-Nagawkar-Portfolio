import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectBox from "../HelperComponents/ProjectBox";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="projects--section">
      <div className="projects--header--div">
        <h1
          className={`projects--header ${
            inView ? "project--title--animation" : ""
          }`}
        >
          Projects
        </h1>
      </div>

      <div className="projects" ref={ref}>
        <div
          className={`all--projects ${inView ? "first--project--anim" : ""}`}
        >
          <ProjectBox title="Portfolio" projectImg="ElkhaiNagawkarPort.png" />
        </div>
        <div
          className={`all--projects ${inView ? "second--project--anim" : ""}`}
        >
          <ProjectBox title="Portfolio" projectImg="test.png" />
        </div>
      </div>
    </div>
  );
}
