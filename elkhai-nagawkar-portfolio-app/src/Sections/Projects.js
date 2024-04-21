import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectBox from "../HelperComponents/ProjectBox";

export default function Projects(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (props.theme === "dark") {
    document
      .querySelector(".projects--section")
      ?.classList.add("dark--mode--secondary--section");
    document
      .querySelector(".projects--header")
      ?.classList.add("dark--mode--seondary");
    document
      .querySelectorAll(".project--title--div")
      .forEach((element) =>
        element?.classList.add("dark--mode--project--title--div")
      );
    document
      .querySelectorAll(".project--title")
      .forEach((element) => element?.classList.add("dark--mode--seondary"));
    document
      .querySelectorAll(".project--description")
      .forEach((element) => element?.classList.add("dark--mode--seondary"));
  } else {
    document
      .querySelector(".projects--section")
      ?.classList.remove("dark--mode--secondary--section");
    document
      .querySelector(".projects--header")
      ?.classList.remove("dark--mode--seondary");
    document
      .querySelectorAll(".project--title--div")
      .forEach((element) =>
        element?.classList.remove("dark--mode--project--title--div")
      );
    document
      .querySelectorAll(".project--title")
      .forEach((element) => element?.classList.remove("dark--mode--seondary"));
    document
      .querySelectorAll(".project--description")
      .forEach((element) => element?.classList.remove("dark--mode--seondary"));
  }

  return (
    <div className={`projects--section`}>
      <div className="projects--header--div">
        <h1
          className={`projects--header ${
            inView ? "project--title--animation" : ""
          }`}
        >
          Projects
        </h1>
      </div>

      <div className="projects" ref={ref}>
        <div
          className={`all--projects ${inView ? "first--project--anim" : ""}`}
        >
          <ProjectBox
            projectImg="ElkhaiNagawkarPort.png"
            title="Portfolio"
            descrition="This is the first project I have worked on independintly after
            learning React. It aided me in further understanding how React works
            as well as helped me polish and further improve my CSS and Javascript
            skills. I really enjoyed creating this project as it reminds me of how
            far I have come since begining my programming journey."
            resources="HTML • CSS • Javascript • React • Git • GitHub"
          />
        </div>
        <div
          className={`all--projects ${inView ? "second--project--anim" : ""}`}
        >
          <ProjectBox
            projectImg="WeatherApp.png"
            title="Weather App"
            descrition="This is the first project where I used Tailwind CSS to style all elements. This project taught me how to use the Fetch API with React in contrast to vanilla Javascript. It also taught me how to recieve data from the fetch request convert it from a JSON and display or use the data retrived to make another fetch request."
            resources="HTML • Tailwind CSS • Javascript • React • Git • GitHub"
          />
        </div>
        <div
          className={`all--projects ${inView ? "third--project--anim" : ""}`}
        >
          <ProjectBox
            projectImg="BankApp.png"
            title="Bank App"
            descrition="With this project I wanted to see how far I could push myself with how much I have learned about Javascript and React. This app tries to replicate a bank app by letting you create/delete an account, add bank cards, make deposits, add expenses, sending money to other accounts, and requesting/paying off loans. This project further aided me in understanding how session storage, and object arrays work."
            resources="HTML • Tailwind CSS • Javascript • React • Git • GitHub"
          />
        </div>

        <div
          className={`all--projects ${inView ? "fourth--project--anim" : ""}`}
        >
          <ProjectBox
            projectImg="XploreDrivingProject.png"
            title="Xplore Driving School Website"
            descrition="This is website I created for my family business. I created this website with the help of GoDaddy Website Builder software. Although this website was not coded by me I gained experience and knowledge of how website building softwares work. Furthermore, I needed to conduct research on SEO to make the website index higher on Google."
            resources="GoDaddy Website Builder"
          />
        </div>
      </div>
    </div>
  );
}
