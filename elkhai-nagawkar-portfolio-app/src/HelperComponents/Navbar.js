import React from "react";

export default function Navbar(props) {
  function handleClick(e) {
    const element = document.querySelector(`.${e.target.id}--div`);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <nav className={`navbar ${props.darkMode ? "dark--mode--navbar" : ""}`}>
      <div className="full--nav">
        <span
          className={`nav--indicator ${
            props.darkMode ? "dark--mode--indicator" : ""
          }`}
        ></span>
        <div className={`picker ${props.darkMode ? "dark--mode--picker" : ""}`}>
          <div onClick={handleClick} className="name--home">
            <span
              className={`navbar--name ${
                props.darkMode ? "dark--mode--main--navbar" : ""
              }`}
              id="heropage"
            >
              E
            </span>
            <span
              className={`navbar--name ${
                props.darkMode ? "dark--mode--main--navbar" : ""
              }`}
              id="heropage"
            >
              lkhai{" "}
            </span>
            <span
              className={`navbar--name lastname ${
                props.darkMode ? "dark--mode--main--navbar" : ""
              }`}
              id="heropage"
            >
              N
            </span>
            <span
              className={`navbar--name ${
                props.darkMode ? "dark--mode--main--navbar" : ""
              }`}
              id="heropage"
            >
              agawkar
            </span>
          </div>
          <ul
            className={`main--navbar ${
              props.darkMode ? "dark--mode--main--navbar" : ""
            }`}
          >
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
