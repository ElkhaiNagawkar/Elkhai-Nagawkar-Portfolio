import React from "react";

export default function Preloader() {
  const [preloadingDone, setPreloadingDone] = React.useState(false);

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
    </div>
  );
}
