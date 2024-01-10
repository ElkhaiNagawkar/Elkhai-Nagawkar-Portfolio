import React from "react";
import Box from "../HelperComponents/Box";
import { useInView } from "react-intersection-observer";

export default function Toolbox() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: familiarRef, inView: familiarinView } = useInView({
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
            <Box colour="blue" skill="C" />
            <Box colour="blue" skill="C++" />
            <Box colour="blue" skill="Java" />
            <Box colour="blue" skill="SQL" />
            <Box colour="blue" skill="HTML" />
            <Box colour="blue" skill="CSS" />
            <Box colour="blue" skill="Javascript" />
          </div>
          <div
            className={`skills ${inView ? "skills--framework--animation" : ""}`}
          >
            <Box colour="blue" skill="React" />
            <Box colour="blue" skill="Tailwind" />
          </div>
        </div>
        <h1
          className={`toolbox--programming--hadear ${
            familiarinView ? "toolbox--prog--animation" : ""
          }`}
        >
          Some Familiarity
        </h1>
        <div
          className={`skills ${familiarinView ? "familiar-animation" : ""}`}
          ref={familiarRef}
        >
          <Box colour="blue" skill="C#" />
          <Box colour="blue" skill="jQuery" />
          <Box colour="blue" skill="Bootstrap" />
        </div>
      </div>
    </div>
  );
}
