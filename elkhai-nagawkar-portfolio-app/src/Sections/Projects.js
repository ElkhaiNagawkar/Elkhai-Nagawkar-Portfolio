import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectBox from "../HelperComponents/ProjectBox";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="projects--section">
      <div className="projects--header--div">
        <h1
          ref={ref}
          className={`projects--header ${
            inView ? "project--title--animation" : ""
          }`}
        >
          Projects
        </h1>
      </div>

      <div className="all--projects">
        <ProjectBox title="Portfolio" projectImg="ElkhaiNagawkarPort.png" />
        <ProjectBox title="Portfolio" projectImg="test.png" />
      </div>
    </div>
  );
}
