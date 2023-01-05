import React from "react";
import "./Experience.css";
import tcs from "../images/tcs.png";
import developer from "../images/developer_male.png";
import CodeIcon from "@mui/icons-material/Code";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="experienceRight">
        <img src={developer} alt="coding"/>

        <h1>A short summary</h1>
        <h4>2+ years of Experience in TCS</h4>
      </div>
      <div className="experienceLeft">
        <div className="experienceTCS">
          <div className="logoTitle">
            <div className="logo">
              <img src={tcs}  alt="tcslogo"/>
            </div>
            <div>
              <h1 className="title">System Engineer</h1>
              <p>Tata Consultancy Services • Sep 2020 - Oct 2022</p>
            </div>
          </div>

          <div className="experienceDescription">
            <ul>
              <li>
                Actively worked in an agile software development environment
                which utilized the Scrum process.
              </li>
              <li>Worked on weekly point release in horizon team. </li>
              <li>
                Developed a Utility to get information of all the attributes of
                the table from different components.
              </li>
              <li> Worked on automating multiple Data Quality checks. </li>
            </ul>
            <div className="teckStack">
              <CodeIcon fontSize="medium" />
              <p>KDB/Q • Unix • Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
