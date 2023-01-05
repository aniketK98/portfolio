import React from "react";
import MainScreen from "../images/mainScreen.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* <img src={WorkingPng} className="workingImage" /> */}
      <img src={MainScreen} className="workingImage" alt="MainScreenImg"/>

      <div className="homeAbout">
        <h1 className="about_name">Hi I'm Aniket</h1>
        <h1 className="about_designation">
          Developer <span className="and">&</span> Designer
        </h1>
        <h4 className="about_description">
          Creating innovative design solutions that anticipate the needs and
          desires of users is my passion and with the ability to write code
          gives me the power to bring the ideas to life.
        </h4>
      </div>
    </div>
  );
}

export default Home;
