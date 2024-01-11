import React from "react";
import Box from "../HelperComponents/Box";
import { useInView } from "react-intersection-observer";

export default function Toolbox() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: VersionRef, inView: VersionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="main--toolbox">
      <div className="programming--div">
        <h1
          className={`toolbox--programming--hadear ${
            inView ? "toolbox--prog--animation" : ""
          }`}
        >
          Programming languages
        </h1>
        <h1
          className={`toolbox--programming--hadear ${
            inView ? "toolbox--framework--animation" : ""
          }`}
        >
          Frameworks
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
          <div
            className={`skills ${inView ? "skills--framework--animation" : ""}`}
          >
            <Box skill="React" />
            <Box skill="Tailwind" />
          </div>
        </div>
        <h1
          className={`toolbox--programming--hadear ${
            VersionInView ? "toolbox--prog--animation" : ""
          }`}
        >
          Version Control
        </h1>
        <h1
          className={`toolbox--programming--hadear ${
            VersionInView ? "toolbox--familiar--animation" : ""
          }`}
        >
          Some Familiarity
        </h1>

        <div className="all-skills">
          <div
            className={`skills ${VersionInView ? "version--animation" : ""}`}
          >
            <Box skill="Git" />
            <Box skill="GitHub" />
          </div>
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
