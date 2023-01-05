import React from "react";
import "./Work.css";
import chatapp from "../images/chat-app.png";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Work() {
  return (
    <div className="work" id="work">
      <h1 className="workTitle">Some of the projects I've created</h1>
      <h4 className="workDescription">
        I believe that the most effective way to learn is through practical
        application, even if it means encountering roadblocks and having to
        figure things out on my own. That's why I find it rewarding to build
        things from scratch and use online resources to troubleshoot any
        problems that come up.
      </h4>
      <div className="projects">
        <div className="project">
          <img src={chatapp} />
          <h1>Chat Application</h1>
          <p>
            This app features secure authorization using JSON Web Tokens (JWT)
            and offers users the ability to create their own account and log in
            to start chatting in real-time. One of the standout features of this
            chat app is its ability to provide real-time updates to the
            conversation, ensuring that users are always up-to-date and
            connected.
          </p>
          <p className="teckStack">
            ReactJS • NodeJS • MongoDB • ExpressJS • PusherJS • Redux-toolkit
          </p>
          <div className="links">
            <CodeIcon fontSize="medium" />
            <GitHubIcon fontSize="medium" />
          </div>
        </div>
        <div className="project">
          <img src={chatapp} />
          <h1>Goal Application</h1>
          <p>
            This app allows users to create their own account and log in to set
            and track their goals. With secure authorization using JWT, their
            personal information is kept safe. Whether you're looking to set
            long-term goals or just want to stay on top of your daily tasks,
            this app is a helpful and user-friendly tool for staying organized
            and motivated.
          </p>
          <p className="teckStack">
            ReactJS • NodeJS • MongoDB • ExpressJS • Redux-toolkit
          </p>
          <div className="links">
            <CodeIcon fontSize="medium" />
            <GitHubIcon fontSize="medium" />
          </div>
        </div>
        <div className="project">
          <img src={chatapp} />
          <h1>Chat Application</h1>
          <p>
            This app features secure authorization using JSON Web Tokens (JWT)
            and offers users the ability to create their own account and log in
            to start chatting in real-time. One of the standout features of this
            chat app is its ability to provide real-time updates to the
            conversation, ensuring that users are always up-to-date and
            connected.
          </p>
          <p className="teckStack">ReactJS • NodeJS • MongoDB • ExpressJS</p>
          <div className="links">
            <CodeIcon fontSize="medium" />
            <GitHubIcon fontSize="medium" />
          </div>
        </div>
        <div className="project">
          <img src={chatapp} />
          <h1>Chat Application</h1>
          <p>
            This app features secure authorization using JSON Web Tokens (JWT)
            and offers users the ability to create their own account and log in
            to start chatting in real-time. One of the standout features of this
            chat app is its ability to provide real-time updates to the
            conversation, ensuring that users are always up-to-date and
            connected.
          </p>
          <p className="teckStack">ReactJS • NodeJS • MongoDB • ExpressJS</p>
          <div className="links">
            <CodeIcon fontSize="medium" />
            <GitHubIcon fontSize="medium" />
          </div>
        </div>
        <div className="project">
          <img src={chatapp} />
          <h1>Chat Application</h1>
          <p>
            This app features secure authorization using JSON Web Tokens (JWT)
            and offers users the ability to create their own account and log in
            to start chatting in real-time. One of the standout features of this
            chat app is its ability to provide real-time updates to the
            conversation, ensuring that users are always up-to-date and
            connected.
          </p>
          <p className="teckStack">ReactJS • NodeJS • MongoDB • ExpressJS</p>
          <div className="links">
            <CodeIcon fontSize="medium" />
            <GitHubIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <div className="github">
        <a href="https://github.com/aniketK98" target={"_blank"}>
          <p>more on my github</p> <ArrowOutwardIcon fontSize="small" />
        </a>
      </div>
    </div>
  );
}

export default Work;
