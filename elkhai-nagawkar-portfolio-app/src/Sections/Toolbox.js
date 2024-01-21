import React from "react";
import Box from "../HelperComponents/Box";
import { useInView } from "react-intersection-observer";

export default function Toolbox(props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: VersionRef, inView: VersionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className={`main--toolbox ${
        props.darkMode ? "dark--mode--primary--section" : ""
      }`}
    >
      <div className="programming--div">
        <h1
          className={`toolbox--programming--hadear ${
            inView ? "toolbox--prog--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          Programming languages
        </h1>
        <h1
          className={`toolbox--programming--hadear ${
            inView ? "toolbox--framework--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          Frameworks
        </h1>
        <div className="all-skills">
          <div
            className={`skills ${inView ? "skills--animation" : ""}`}
            ref={ref}
          >
            <Box skill="C" darkMode={props.darkMode} />
            <Box skill="C++" darkMode={props.darkMode} />
            <Box skill="Java" darkMode={props.darkMode} />
            <Box skill="SQL" darkMode={props.darkMode} />
            <Box skill="HTML" darkMode={props.darkMode} />
            <Box skill="CSS" darkMode={props.darkMode} />
            <Box skill="Javascript" darkMode={props.darkMode} />
          </div>
          <div
            className={`skills ${inView ? "skills--framework--animation" : ""}`}
          >
            <Box skill="React" darkMode={props.darkMode} />
            <Box skill="Tailwind" darkMode={props.darkMode} />
          </div>
        </div>
        <h1
          className={`toolbox--programming--hadear ${
            VersionInView ? "toolbox--prog--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          Version Control
        </h1>
        <h1
          className={`toolbox--programming--hadear ${
            VersionInView ? "toolbox--familiar--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          Some Familiarity
        </h1>

        <div className="all-skills">
          <div
            className={`skills ${VersionInView ? "version--animation" : ""}`}
          >
            <Box skill="Git" darkMode={props.darkMode} />
            <Box skill="GitHub" darkMode={props.darkMode} />
          </div>
          <div
            className={`skills ${VersionInView ? "familiar--animation" : ""}`}
            ref={VersionRef}
          >
            <Box skill="C#" darkMode={props.darkMode} />
            <Box skill="jQuery" darkMode={props.darkMode} />
            <Box skill="Bootstrap" darkMode={props.darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
