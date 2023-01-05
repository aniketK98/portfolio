import React from "react";
import "./Header.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  return (
    <div className="header">
      <div className="headerRight">
        <span className="credit">©</span>
        <div className="headerRightText" data-after="Kulkarni">
          <span className="text1">Code by Aniket</span>
        </div>
      </div>
      <div className="headerLeft">
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#experience">
            <li>Experience</li>
          </a>
          <a href="#work">
            <li>Work</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>

        <a
          className="linkGithub"
          href="https://github.com/aniketK98"
          target={"_blank"}
          rel="noreferrer"
        >
          <GitHubIcon
            fontSize={"medium"}
            sx={{ color: "#000" }}
            className="icons"
          />
          <a
            className="linkLinkedIn"
            href="https://www.linkedin.com/in/aniket2798/"
            target={"_blank"}
            rel="noreferrer"
          >
            <LinkedInIcon fontSize={"medium"} className="icons" />
          </a>
        </a>
        <a
          className="linkTwitter"
          href="https://twitter.com/aniketkulk98"
          target={"_blank"}
          rel="noreferrer"
        >
          <TwitterIcon fontSize={"medium"} className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Header;
