import React from "react";
import { useInView } from "react-intersection-observer";

export default function Contact(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (props.theme === "dark") {
    document
      .querySelector(".contact--section")
      ?.classList.add("dark--mode--primary--section");
    document
      .querySelector(".contact--header")
      ?.classList.add("dark--mode--seondary");
    document
      .querySelector(".thanks--div")
      ?.classList.add("dark--mode--seondary");
    const collection = document
      .querySelector(".contact--section")
      ?.getElementsByTagName("h3");

    if (collection) {
      for (let i = 0; i < collection.length; i++) {
        collection[i]?.classList.add("dark--mode--seondary");
      }
    }
    document
      .querySelectorAll(".mail--link")
      .forEach((element) =>
        element?.classList.add("dark--mode--contact", "dark--mode--mail--link")
      );

    document
      .querySelectorAll(".social--link")
      .forEach((element) =>
        element?.classList.add(
          "dark--mode--contact",
          "dark--mode--social--link"
        )
      );
  } else {
    document
      .querySelector(".contact--section")
      ?.classList.remove("dark--mode--primary--section");
    document
      .querySelector(".contact--header")
      ?.classList.remove("dark--mode--seondary");
    document
      .querySelector(".thanks--div")
      ?.classList.remove("dark--mode--seondary");
    const collection = document
      .querySelector(".contact--section")
      ?.getElementsByTagName("h3");

    if (collection) {
      for (let i = 0; i < collection.length; i++) {
        collection[i]?.classList.remove("dark--mode--seondary");
      }
    }

    document
      .querySelectorAll(".mail--link")
      .forEach((element) =>
        element?.classList.remove(
          "dark--mode--contact",
          "dark--mode--mail--link"
        )
      );
    document
      .querySelectorAll(".social--link")
      .forEach((element) =>
        element?.classList.remove(
          "dark--mode--contact",
          "dark--mode--social--link"
        )
      );
  }

  return (
    <div className={`contact--section`}>
      <div className="header--div">
        <h1
          className={`contact--header ${
            inView ? "contact--header--animation" : ""
          }`}
        >
          Contact Me!
        </h1>
      </div>
      <div className={`thanks--div ${inView ? "thanks--div--animation" : ""}`}>
        <h4>
          Thank you for taking the time to view my Portfolio, I really apriciate
          it!
        </h4>
      </div>
      <div className="links" ref={ref}>
        <div className="mail--section">
          <h3 className={`${inView ? "mail--header--animation" : ""}`}>
            Mail{" "}
          </h3>
          <li className="mail--list">
            <a
              className={`mail--link ${inView ? "links--animation" : ""}`}
              href="mailto:nagawkarelkhai@gmail.com"
            >
              {" "}
              nagawkarelkhai@gmail.com ↗
            </a>
          </li>
          <h3 className={`${inView ? "mail--header--animation" : ""}`}>
            Rèsumè{" "}
          </h3>
          <li className="mail--list">
            <a
              className={`mail--link ${inView ? "links--animation" : ""}`}
              href="https://drive.google.com/file/d/1BcIWJTPR7DS4hLShUGIVTOQ6f7GAExSA/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Elkhai Nagawkar Resume ↗
            </a>
          </li>
        </div>
        <div className="socials--section">
          <h3 className={`${inView ? "social--header--animation" : ""}`}>
            Socials{" "}
          </h3>
          <li className="social--list">
            <a
              className={`social--link ${inView ? "links--animation" : ""}`}
              href="https://github.com/ElkhaiNagawkar?tab=overview&from=2024-01-01&to=2024-01-14"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub ↗
            </a>
            <a
              className={`social--link ${
                inView ? "links--animation dark--mode--social--link" : ""
              }`}
              href="https://www.linkedin.com/in/elkhai-nagawkar-1a3895274/"
              target="_blank"
              rel="noreferrer"
            >
              LinkdIn ↗
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
