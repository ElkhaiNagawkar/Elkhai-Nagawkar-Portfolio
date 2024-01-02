import React from "react";
import Name from "./NameSvg";

export default function () {
  const name = document.querySelectorAll(".name path");
  for (let i = 0; i < name.length; i++) {
    console.log(`letter ${i} is ${name[i].getTotalLength()}`);
  }
  return (
    <section className="hero--section">
      <div className="hero--text">
        <h1 className="greeting">Hey I'm,</h1>
        <Name />
        <p className="hero--description">
          A <strong>computer programmer</strong> specializing in{" "}
          <strong> backend </strong> and{" "}
          <strong>frontend software development</strong> with more then{" "}
          <strong>two years</strong> of educational experience. I'm passionate
          about creating exceptional as well as performance driven software.
        </p>
        <div className="scroll--div">
          <span className="scroll--text">Scroll</span>
          <div className="line--div--container">
            <span className="line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
