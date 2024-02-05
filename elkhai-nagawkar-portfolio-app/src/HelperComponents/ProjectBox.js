import React from "react";

export default function ProjectBox(props) {
  return (
    <div className="project">
      <img className="projectImg" src={`../imgs/${props.projectImg}`}></img>
      <div className={`project--title--div`}>
        <h1 className={`project--title`}>{props.title}</h1>
        <p className={`project--description`}>{props.descrition}</p>
        <div className="resources--used">
          <div className="resource orange--background">
            <h4>HTML • CSS • Javascript • React</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
