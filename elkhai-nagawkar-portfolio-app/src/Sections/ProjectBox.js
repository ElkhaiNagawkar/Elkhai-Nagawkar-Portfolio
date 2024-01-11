import React from "react";

export default function ProjectBox(props) {
  return (
    <div className="project">
      <img className="projectImg" src={`../imgs/${props.projectImg}`}></img>
      <h1 className="project--title">{props.title}</h1>
    </div>
  );
}
