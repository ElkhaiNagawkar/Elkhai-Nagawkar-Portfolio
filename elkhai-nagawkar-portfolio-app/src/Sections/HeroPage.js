import React from "react";
import Navbar from "../HelperComponents/Navbar";
import TitlePage from "../HelperComponents/TitlePage";

export default function HeroPage(props) {
  return (
    <div
      className={`Hero ${props.darkMode ? "dark--mode--primary--section" : ""}`}
    >
      <Navbar darkMode={props.darkMode} />
      <TitlePage darkMode={props.darkMode} />
    </div>
  );
}
