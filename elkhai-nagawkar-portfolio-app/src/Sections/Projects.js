import React from "react";
import ProjectBox from "./ProjectBox";

export default function Projects() {
  return (
    <div className="projects--section">
      <h1 className="projects--header">Projects</h1>
      <div className="projects--div">
        <div className="all--projects">
          <ProjectBox title="Portfolio" projectImg="ElkhaiNagawkarPort.png" />
          <ProjectBox title="Portfolio" projectImg="ElkhaiNagawkarPort.png" />
        </div>
      </div>
    </div>
  );
}
