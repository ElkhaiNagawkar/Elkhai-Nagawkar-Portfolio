import React from "react";

export default function Box(props) {
  return (
    <div className="box">
      <p className="skill">{props.skill}</p>
    </div>
  );
}
