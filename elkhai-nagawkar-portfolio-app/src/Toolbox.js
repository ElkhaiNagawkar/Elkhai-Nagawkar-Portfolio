import React from "react";
import Box from "./Box";
import { useInView } from "react-intersection-observer";

export default function Toolbox() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="main--toolbox">
      <div className="programming--div">
        <h1
          className={`toolbox--programming--hadear ${
            inView ? "toolbox--programming--hadear--animation" : ""
          }`}
        >
          Programming languages
        </h1>
        <h1 className="toolbox--programming--hadear">Frameworks</h1>
        <div className="all-skills">
          <div className="skills" ref={ref}>
            <Box skill="C" />
            <Box skill="C++" />
            <Box skill="Java" />
            <Box skill="SQL" />
            <Box skill="HTML" />
            <Box skill="CSS" />
            <Box skill="Javascript" />
          </div>
          <div className="skills">
            <Box skill="React" />
            <Box skill="Tailwind" />
          </div>
        </div>
        <h1 className="toolbox--programming--hadear">Some Familiarity</h1>
        <div className="skills">
          <Box skill="C#" />
          <Box skill="jQuery" />
          <Box skill="Bootstrap" />
        </div>
      </div>
    </div>
  );
}
