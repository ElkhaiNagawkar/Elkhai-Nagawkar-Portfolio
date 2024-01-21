import React from "react";

export default function ProjectBox(props) {
  return (
    <div className="project">
      <img className="projectImg" src={`../imgs/${props.projectImg}`}></img>
      <div
        className={`project--title--div ${
          props.darkMode ? "dark--mode--project--title--div" : ""
        }`}
      >
        <h1
          className={`project--title ${
            props.darkMode ? "dark--mode--seondary" : ""
          }`}
        >
          {props.title}
        </h1>
        <p
          className={`project--description ${
            props.darkMode ? "dark--mode--seondary" : ""
          }`}
        >
          This is the first project I have worked on independintly after
          learning React. It aided me in further understanding how React works
          as well as helped me polish and further improve my CSS and Javascript
          skills. I really enjoyed creating this project as it reminds me of how
          far I have come since begining my programming journey.
        </p>
        <div className="resources--used">
          <div className="resource orange--background">
            <h4>HTML • CSS • Javascript • React</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
