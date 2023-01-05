import React from "react";
import "./About.css";
import Android from "../images/android.png";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import express from "../images/express.png";
import html from "../images/html.png";
import java from "../images/java.png";
import js from "../images/js.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/mysql.png";
import nodejs from "../images/nodejs.png";
import php from "../images/php.png";
import python from "../images/python.png";
import reactjs from "../images/reactjs.png";
import redux from "../images/redux.png";
import kdb from "../images/kdb.png";
import climbing from "../images/climbing_up.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutRight">
        <h1 className="aboutTitle">About me</h1>
        <h6 className="aboutDescription">
          Hi there! I am a developer with a boundless passion for creating and
          building. With a background in <span>MERN stack</span>, I have a
          strong foundation in <span>frontend development </span>and am always
          looking for opportunities to expand my knowledge and grow as a
          developer. Whether it's working on a cutting-edge software application
          or building a personal project, I am driven by the thrill of
          creation and the satisfaction of seeing my code come to life.
        </h6>
        <h6 className="aboutDescription">
          When I'm not coding, you can find me tinkering with new technologies,
          collaborating with my peers, or simply soaking up all the latest
          industry news.
        </h6>
        <h6 className="aboutDescription">
          <span>Things I've worked with :</span>
        </h6>
        <div className="aboutWorkedContainer">
          <div className="aboutWorked">
            <img src={html} alt="workedWith"/>
            <p>HTML</p>
          </div>
          <div className="aboutWorked">
            <img src={css} alt="workedWith"/>
            <p>CSS</p>
          </div>
          <div className="aboutWorked">
            <img src={bootstrap} alt="workedWith"/>
            <p>Bootstrap</p>
          </div>
          <div className="aboutWorked">
            <img src={js} alt="workedWith"/>
            <p>JS</p>
          </div>
          <div className="aboutWorked">
            <img src={reactjs} alt="workedWith"/>
            <p>ReactJS</p>
          </div>
          <div className="aboutWorked">
            <img src={redux} alt="workedWith"/>
            <p>Redux</p>
          </div>
          <div className="aboutWorked">
            <img src={nodejs} alt="workedWith"/>
            <p>NodeJS</p>
          </div>
          <div className="aboutWorked">
            <img src={mongodb} alt="workedWith"/>
            <p>MongoDB</p>
          </div>
          <div className="aboutWorked">
            <img src={java} alt="workedWith"/>
            <p>Java</p>
          </div>
          <div className="aboutWorked">
            <img src={mysql} alt="workedWith"/>
            <p>MySQL</p>
          </div>
          <div className="aboutWorked">
            <img src={express} alt="workedWith"/>
            <p>ExpressJS</p>
          </div>
          <div className="aboutWorked">
            <img src={php} alt="workedWith"/>
            <p>php</p>
          </div>
          <div className="aboutWorked">
            <img src={python} alt="workedWith"/>
            <p>python</p>
          </div>
          <div className="aboutWorked">
            <img src={kdb} alt="workedWith"/>
            <p>KDB/Q</p>
          </div>
          <div className="aboutWorked">
            <img src={Android} alt="workedWith"/>
            <p>Android</p>
          </div>
        </div>
      </div>
      <div className="aboutLeft">
        <img src={climbing} className="aboutLeftClimbing" alt="climbing guy"/>
      </div>
    </div>
  );
}

export default About;
