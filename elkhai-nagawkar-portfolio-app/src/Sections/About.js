import { useInView } from "react-intersection-observer";

export default function About(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (props.theme === "dark") {
    document
      .querySelector(".about--section")
      ?.classList.add("dark--mode--secondary--section");
    document.querySelectorAll(".about--header").forEach((element) => {
      element?.classList.add("dark--mode--seondary");
    });

    document.querySelectorAll(".about--paragraph").forEach((element) => {
      element?.classList.add("dark--mode--seondary");
    });
  } else {
    document
      .querySelector(".about--section")
      ?.classList.remove("dark--mode--secondary--section");
    document.querySelectorAll(".about--header").forEach((element) => {
      element?.classList.remove("dark--mode--seondary");
    });
    document.querySelectorAll(".about--paragraph").forEach((element) => {
      element?.classList.remove("dark--mode--seondary");
    });
  }

  return (
    <div className={`about--section`}>
      <div className="about--header--div">
        <h1
          className={`about--header ${
            inView ? "about--header--animation" : ""
          }`}
          ref={ref}
        >
          About
        </h1>
      </div>
      <div className="about--paragraph--div">
        <p
          className={`about--paragraph ${
            inView ? "about--paragraph--animation" : ""
          }`}
        >
          My name is Elkhai pronounced el-kai and Im currently a programming
          student attending Fanshawe College. Since a young age I was always
          intrigued and interested in technology especially the software aspect
          of it and how it actually worked in the background. Fast forward to
          2024 and I'm now learning and understanding how those softwares,
          websites, and applications are created! What excites me most about
          being a programmer is the problem-solving aspect of it due to the
          accomplishment you feel when the problem is solved.
        </p>
      </div>
      <div className="about--header--div">
        <h1
          className={`about--header ${
            inView ? "funfact--header--animation" : ""
          }`}
        >
          Fun fact
        </h1>
      </div>
      <div className="about--paragraph--div">
        <p
          className={`about--paragraph ${
            inView ? "funfact--paragraph--animation" : ""
          }`}
        >
          When I am not at my computer I enjoy going to the gym with my younger
          brother as well as discussing random topics that are on our mind like
          coding, tech products that have recently been released, video games,
          and what our goals for the future are!
        </p>
      </div>
    </div>
  );
}
