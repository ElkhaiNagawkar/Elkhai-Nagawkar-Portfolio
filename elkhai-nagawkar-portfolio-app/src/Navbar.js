import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="picker">
        <div className="name--home">
          <span className="navbar--name">E</span>
          <span className="navbar--name">lkhai </span>
          <span className="navbar--name" id="lastname">
            N
          </span>
          <span className="navbar--name">agawkar</span>
        </div>
        <ul className="main--navbar">
          <li id="about">About</li>
          <li id="toolbox">Toolbox</li>
          <li id="projects">Projects</li>
          <li id="contact">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
