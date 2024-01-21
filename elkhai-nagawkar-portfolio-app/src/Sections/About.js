import { useInView } from "react-intersection-observer";

export default function About(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className={`about--section ${
        props.darkMode ? "dark--mode--secondary--section" : ""
      }`}
    >
      <div className="about--header--div">
        <h1
          className={`about--header ${
            inView ? "about--header--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
          ref={ref}
        >
          About
        </h1>
      </div>
      <div className="about--paragraph--div">
        <p
          className={`about--paragraph ${
            inView ? "about--paragraph--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          My name is Elkhai pronounced (el-kai) and im currently a programming
          student attending Fanshawe College. Since a young age I was always
          intrigued and interested in technology especially the software aspact
          of it and how it actully worked. Fast forward to 2024 and I now
          understand how those softwares, websites, and applications are
          created! What excites me most about being a programmer is the
          problem-solving aspect of it due to the accomplishment you feel when
          the problem is solved.
        </p>
      </div>
      <div className="about--header--div">
        <h1
          className={`about--header ${
            inView ? "funfact--header--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          Fun fact
        </h1>
      </div>
      <div className="about--paragraph--div">
        <p
          className={`about--paragraph ${
            inView ? "funfact--paragraph--animation" : ""
          } ${props.darkMode ? "dark--mode--seondary" : ""}`}
        >
          When I am not at my computer I enjoy going to the gym with my younger
          brother as well as discussing random topics that are on our minds!
        </p>
      </div>
    </div>
  );
}
