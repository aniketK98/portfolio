import React from "react";
import "./Work.css";
import chatapp from "../images/chat-app.png";
import goalapp from "../images/goal-app.png";
import imageai from "../images/image-Ai.png";
import reels from "../images/reels.png";
import trivia from "../images/trivia.png";
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
          <img src={chatapp} alt="projectImg" />
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
            <a
              href="https://chat-ak.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/aniketK98/chat-application"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={goalapp} alt="projectImg" />
          <h1>Goal Setter</h1>
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
            <a
              href="https://goals-app-ak.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/aniketK98/goal-application"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={imageai} alt="projectImg" />
          <h1>Image Generator</h1>
          <p>
            An image generator that uses the OpenAI API to create custom images
            in a variety of sizes. With this tool, users can easily generate
            unique images for use in a variety of projects and purposes.
            connected.Whether you're looking to create custom graphics or just
            for fun, this image generator offers endless possibilities. Try it
            out and see what creative images you can come up with!
          </p>
          <p className="teckStack">ReactJS • NodeJS • OpenAI</p>
          <div className="links">
            <a
              href="https://image-generator-ai.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/aniketK98/image-generator"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={trivia} alt="projectImg" />
          <h1>Tech Trivia</h1>
          <p>
            A tech trivia game that uses API to provide users with a variety of
            challenging questions and options. This game keeps track of answers
            and provides users with a score at the end, making it a fun and
            engaging way to test your knowledge of all things tech. Want to
            brush up on your tech trivia, So why wait? Give it a try and see how
            you stack up against the competition!
          </p>
          <p className="teckStack">ReactJS • Axios</p>
          <div className="links">
            <a
              href="https://techtrivia.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/aniketK98/quiz-app"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={reels} alt="projectImg" />
          <h1>Reels clone</h1>
          <p>
            A UI clone of the Instagram Reels, built using ReactJS and powered
            by a backend created with MongoDB, Node.js, and Express.js. The
            Node.js and Express.js backend provides a robust API for seamless
            data management. This UI clone offers an interactive and
            user-friendly experience. Give it a try and see what you can create!
          </p>
          <p className="teckStack">ReactJS • NodeJS • MongoDB • ExpressJS</p>
          <div className="links">
            <a
              href="https://reels-clone1.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/aniketK98/reels-clone"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <div className="github">
        <a
          href="https://github.com/aniketK98"
          target={"_blank"}
          rel="noreferrer"
        >
          <p>more on my github</p> <ArrowOutwardIcon fontSize="small" />
        </a>
      </div>
    </div>
  );
}

export default Work;
