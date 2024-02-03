import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";

export default function Navbar(props) {
  const [windowSize, setWindowSize] = React.useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWindowSize(window.screen.width);
  });

  function handleClick(e) {
    if (windowSize > 480) {
      const element = document.querySelector(`.${e.target.id}--div`);
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      document.querySelector(".full--nav")?.classList.toggle("show--navbar");
      document
        .querySelector(".main--navbar")
        ?.classList.toggle("hide--main--navbar");
      document
        .querySelector(".navbar--hamburger")
        ?.classList.toggle("hide--ham");
      if (e.target.id) {
        const element = document.querySelector(`.${e.target.id}--div`);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
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
    document
      .querySelector(".navbar--hamburger")
      ?.classList.add("dark--mode--seondary");
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
    document
      .querySelector(".navbar--hamburger")
      ?.classList.remove("dark--mode--seondary");
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
            <div className="navbar--hamburger">
              <RxHamburgerMenu />
            </div>
          </div>
          <ul className={`main--navbar hide--main--navbar`}>
            <li onClick={handleClick} id="heropage" className="home--mobile">
              Home
            </li>
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
