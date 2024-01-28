import React from "react";

export default function Preloader(props) {
  const [preloadingDone, setPreloadingDone] = React.useState(false);

  if (props.theme === "dark") {
    document
      .querySelector(".preloader--section")
      ?.classList.add("dark--mode--primary--section", "dark--mode--seondary");
  } else {
    document
      .querySelector(".preloader--section")
      ?.classList.remove(
        "dark--mode--primary--section",
        "dark--mode--seondary"
      );
  }

  setTimeout(() => {
    document
      .querySelector(".preloader--section")
      .classList.add("remove--opacity");
  }, 3600);

  setTimeout(() => {
    setPreloadingDone(true);
  }, 4600);

  setTimeout(() => {
    document.querySelector(".body").style.overflow = "auto";
  }, 3600);

  return (
    <div
      className={`preloader--section ${
        preloadingDone ? "remove--display" : ""
      }`}
    >
      <div className="preloader--container">
        <div className="preloader--name--div">
          <span className="preloader--name">Elkhai Nagawkar</span>
        </div>
        <div className="preloader--portfolio--div">
          <span className="preloader--portfolio"> Portfolio</span>
        </div>
      </div>
      <div className="copyright--div">
        <p className="copyright--para">
          Copyright © 2024 Elkhai Nagawkar All rights reserved.
        </p>
      </div>
    </div>
  );
}
