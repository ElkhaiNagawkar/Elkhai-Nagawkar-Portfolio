import React from "react";
import Navbar from "../HelperComponents/Navbar";
import TitlePage from "../HelperComponents/TitlePage";

export default function HeroPage(props) {
  return (
    <div
      className={`Hero ${
        props?.theme === "dark" ? "dark--mode--primary--section" : ""
      }`}
    >
      <Navbar theme={props.theme} />
      <TitlePage theme={props.theme} />
    </div>
  );
}
