import React from "react";
import Box from "../HelperComponents/Box";
import { useInView } from "react-intersection-observer";

export default function Toolbox(props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: VersionRef, inView: VersionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  if (props.theme === "dark") {
    document
      .querySelector(".main--toolbox")
      ?.classList.add("dark--mode--primary--section");

    document
      .querySelectorAll(".toolbox--programming--hadear")
      .forEach((element) => {
        element?.classList.add("dark--mode--seondary");
      });
    document.querySelectorAll(".box").forEach((element) => {
      element?.classList.add("dark--mode--box");
    });
    document
      .querySelectorAll(".skill")
      .forEach((element) => element?.classList.add("dark--mode--seondary"));
  } else {
    document
      .querySelector(".main--toolbox")
      ?.classList.remove("dark--mode--primary--section");
    document
      .querySelectorAll(".toolbox--programming--hadear")
      .forEach((element) => {
        element?.classList.remove("dark--mode--seondary");
      });
    document.querySelectorAll(".box").forEach((element) => {
      element?.classList.remove("dark--mode--box");
    });
    document
      .querySelectorAll(".skill")
      .forEach((element) => element?.classList.remove("dark--mode--seondary"));
  }

  return (
    <div className={`main--toolbox`}>
      <div className="programming--div">
        <div className="toolbox--container">
          <h1
            className={`toolbox--programming--hadear ${
              inView ? "toolbox--prog--animation" : ""
            }`}
          >
            Programming languages
          </h1>

          <div className="all-skills">
            <div
              className={`skills ${inView ? "skills--animation" : ""}`}
              ref={ref}
            >
              <Box skill="C" />
              <Box skill="C++" />
              <Box skill="Java" />
              <Box skill="SQL" />
              <Box skill="HTML" />
              <Box skill="CSS" />
              <Box skill="Javascript" />
            </div>
          </div>
        </div>
        <div className="toolbox--container">
          <h1
            className={`toolbox--programming--hadear ${
              inView ? "toolbox--framework--animation" : ""
            }`}
          >
            Frameworks
          </h1>
          <div className="all-skills">
            <div
              className={`skills ${
                inView ? "skills--framework--animation" : ""
              }`}
            >
              <Box skill="React" />
              <Box skill="Tailwind" />
            </div>
          </div>
        </div>
        <div className="toolbox--container">
          <h1
            className={`toolbox--programming--hadear ${
              VersionInView ? "toolbox--prog--animation" : ""
            }`}
          >
            Version Control
          </h1>

          <div className="all-skills">
            <div
              className={`skills ${VersionInView ? "version--animation" : ""}`}
            >
              <Box skill="Git" />
              <Box skill="GitHub" />
            </div>
          </div>
        </div>
        <div className="toolbox--container">
          <h1
            className={`toolbox--programming--hadear ${
              VersionInView ? "toolbox--familiar--animation" : ""
            }`}
          >
            Some Familiarity
          </h1>
          <div
            className={`skills ${VersionInView ? "familiar--animation" : ""}`}
            ref={VersionRef}
          >
            <Box skill="C#" />
            <Box skill="jQuery" />
            <Box skill="Bootstrap" />
          </div>
        </div>
      </div>
    </div>
  );
}
