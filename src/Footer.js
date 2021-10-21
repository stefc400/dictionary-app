import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/st%C3%A9phanie-cusson-4b7098118/"
          target="_blank"
          rel="noreferrer"
        >
          Stephanie Cusson
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/stefc400/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}
