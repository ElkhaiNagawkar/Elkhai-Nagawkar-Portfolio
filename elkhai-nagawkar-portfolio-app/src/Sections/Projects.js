import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectBox from "../HelperComponents/ProjectBox";

export default function Projects(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (props.theme === "dark") {
    document
      .querySelector(".projects--section")
      ?.classList.add("dark--mode--secondary--section");
    document
      .querySelector(".projects--header")
      ?.classList.add("dark--mode--seondary");
    document
      .querySelectorAll(".project--title--div")
      .forEach((element) =>
        element?.classList.add("dark--mode--project--title--div")
      );
    document
      .querySelectorAll(".project--title")
      .forEach((element) => element?.classList.add("dark--mode--seondary"));
    document
      .querySelectorAll(".project--description")
      .forEach((element) => element?.classList.add("dark--mode--seondary"));
  } else {
    document
      .querySelector(".projects--section")
      ?.classList.remove("dark--mode--secondary--section");
    document
      .querySelector(".projects--header")
      ?.classList.remove("dark--mode--seondary");
    document
      .querySelectorAll(".project--title--div")
      .forEach((element) =>
        element?.classList.remove("dark--mode--project--title--div")
      );
    document
      .querySelectorAll(".project--title")
      .forEach((element) => element?.classList.remove("dark--mode--seondary"));
    document
      .querySelectorAll(".project--description")
      .forEach((element) => element?.classList.remove("dark--mode--seondary"));
  }

  return (
    <div className={`projects--section`}>
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
