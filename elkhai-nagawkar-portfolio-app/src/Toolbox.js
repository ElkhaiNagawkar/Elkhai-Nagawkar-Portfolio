import React from "react";
import Box from "./Box";

export default function Toolbox() {
  return (
    <div className="main--toolbox">
      <div className="programming--div">
        <h1 className="toolbox--programming--hadear">Programming languages</h1>
        <div className="skills">
          <Box skill="C" />
          <Box skill="C++" />
          <Box skill="Java" />
        </div>
      </div>
    </div>
  );
}
