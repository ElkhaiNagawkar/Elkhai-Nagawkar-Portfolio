import React from "react";

export default function Navbar() {
  function handleClick(e) {
    const element = document.querySelector(`.${e.target.id}--div`);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <nav className="navbar">
      <div className="full--nav">
        <span className="nav--indicator"></span>
        <div className="picker">
          <div onClick={handleClick} className="name--home">
            <span className="navbar--name" id="heropage">
              E
            </span>
            <span className="navbar--name" id="heropage">
              lkhai{" "}
            </span>
            <span className="navbar--name lastname" id="heropage">
              N
            </span>
            <span className="navbar--name" id="heropage">
              agawkar
            </span>
          </div>
          <ul className="main--navbar">
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
