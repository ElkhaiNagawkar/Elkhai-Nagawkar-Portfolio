import React from "react";
import Name from "./NameSvg";
import { useInView } from "react-intersection-observer";

export default function () {
  return (
    <section className="hero--section">
      <div className="hero--text">
        <h1 className="greeting">Hey I'm,</h1>
        <Name />
        <p className="hero--description">
          A <strong>computer programmer</strong> specializing in{" "}
          <strong> backend </strong> and{" "}
          <strong>frontend software development</strong> with more than{" "}
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
      <div className="status">
        <div className="status-circle"></div>
        <p className="status--text">
          Currently looking for a Co-op/Internship for the 2024 Fall term
        </p>
      </div>
    </section>
  );
}
