import React from "react";

export default function Box(props) {
  return (
    <div className={`box ${props.darkMode ? "dark--mode--box" : ""}`}>
      <p className={`skill ${props.darkMode ? "dark--mode--seondary" : ""}`}>
        {props.skill}
      </p>
    </div>
  );
}
