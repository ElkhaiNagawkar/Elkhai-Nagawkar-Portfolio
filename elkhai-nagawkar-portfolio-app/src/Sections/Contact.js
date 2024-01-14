import React from "react";

export default function Contact() {
  return (
    <div className="contact--section">
      <div className="header--div">
        <h1 className="contact--header">Contact Me!</h1>
      </div>
      <div className="thanks--div">
        <h4>
          Thank you for taking the time to view my Portfolio, I really apriciate
          it!
        </h4>
      </div>
      <div className="links">
        <div className="mail--section">
          <h3>Mail </h3>
          <a className="link" href="mailto:nagawkarelkhai@gmail.com">
            {" "}
            nagawkarelkhai@gmail.com ↗
          </a>
        </div>
        <div className="socials--section">
          <h3>Socials </h3>
          <a className="link" href="">
            {" "}
            GitHub ↗
          </a>
          <a className="link" href="">
            LinkdIn ↗
          </a>
        </div>
      </div>
    </div>
  );
}
