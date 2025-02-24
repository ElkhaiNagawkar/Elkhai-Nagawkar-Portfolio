import React from "react";
import Name from "./NameSvg";

export default function TitlePage(props) {
  if (props.theme === "dark") {
    document.querySelector(".greeting")?.classList.add("dark--mode--seondary");
    document
      .querySelector(".hero--description")
      ?.classList.add("dark--mode--seondary");

    document
      .querySelector(".scroll--text")
      ?.classList.add("dark--mode--seondary");

    document.querySelector(".line")?.classList.add("dark--mode--line");
    document.querySelector(".status")?.classList.add("dark--mode--seondary");
  } else {
    document
      .querySelector(".greeting")
      ?.classList.remove("dark--mode--seondary");
    document
      .querySelector(".hero--description")
      ?.classList.remove("dark--mode--seondary");
    document
      .querySelector(".scroll--text")
      ?.classList.remove("dark--mode--seondary");
    document.querySelector(".line")?.classList.remove("dark--mode--line");
    document.querySelector(".status")?.classList.remove("dark--mode--seondary");
  }

  return (
    <section className="hero--section">
      <div className="hero--text">
        <h1 className={`greeting`}>Hey I'm,</h1>
        <Name darkMode={props.darkMode} theme={props.theme} />
        <p className={`hero--description`}>
          A <strong>computer programmer</strong> specializing in{" "}
          <strong> backend </strong> and{" "}
          <strong>frontend software development</strong> with more than{" "}
          <strong>two years</strong> of educational experience. I'm passionate
          about creating exceptional as well as performance driven software.
        </p>
        <div className="scroll--div">
          <span className={`scroll--text`}>Scroll</span>
          <div className="line--div--container">
            <span className={`line`}></span>
          </div>
        </div>
      </div>
      <div className={`status`}>
        <div className="status-circle"></div>
        <p className="status--text">
          Currently looking for a Co-op/Internship for the 2025 Summer term
        </p>
      </div>
    </section>
  );
}
