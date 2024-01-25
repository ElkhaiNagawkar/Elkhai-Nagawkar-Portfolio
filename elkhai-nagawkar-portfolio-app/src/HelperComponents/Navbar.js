import React from "react";

export default function Navbar(props) {
  function handleClick(e) {
    const element = document.querySelector(`.${e.target.id}--div`);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (props.theme === "dark") {
    document.querySelector(".navbar")?.classList.add("dark--mode--navbar");
    document
      .querySelector(".nav--indicator")
      ?.classList.add("dark--mode--indicator");
    document.querySelector(".picker")?.classList.add("dark--mode--picker");
    document
      .querySelectorAll(".navbar--name")
      .forEach((element) => element?.classList.add("dark--mode--main--navbar"));
    document
      .querySelector(".main--navbar")
      ?.classList.add("dark--mode--main--navbar");
  } else {
    document.querySelector(".navbar")?.classList.remove("dark--mode--navbar");
    document
      .querySelector(".nav--indicator")
      ?.classList.remove("dark--mode--indicator");
    document.querySelector(".picker")?.classList.remove("dark--mode--picker");
    document
      .querySelector(".navbar--name")
      ?.classList.remove("dark--mode--main--navbar");
    document
      .querySelectorAll(".navbar--name")
      .forEach((element) =>
        element?.classList.remove("dark--mode--main--navbar")
      );
    document
      .querySelector(".main--navbar")
      ?.classList.remove("dark--mode--main--navbar");
  }

  return (
    <nav className={`navbar`}>
      <div className="full--nav">
        <span className={`nav--indicator`}></span>
        <div className={`picker`}>
          <div onClick={handleClick} className="name--home">
            <span className={`navbar--name`} id="heropage">
              E
            </span>
            <span className={`navbar--name`} id="heropage">
              lkhai{" "}
            </span>
            <span className={`navbar--name lastname`} id="heropage">
              N
            </span>
            <span className={`navbar--name`} id="heropage">
              agawkar
            </span>
          </div>
          <ul className={`main--navbar`}>
            <li onClick={handleClick} id="about">
              About
            </li>
            <li onClick={handleClick} id="toolbox">
              Toolbox
            </li>
            <li onClick={handleClick} id="projects">
              Projects
            </li>
            <li onClick={handleClick} id="contact">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
