import React, { useContext } from "react";
import "./About.css";
import aboutImg from "../../img/about.jpg";
import { ThemeContext } from "../../Context";
const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about">
      <div className="about-left">
        <div
          style={{ backgroundColor: darkMode && "#59b256" }}
          className="about-card bg"
        ></div>
        <div className="about-card">
          <img
            style={{ filter: darkMode && `grayscale(${0})` }}
            className="about-img"
            src={aboutImg}
            alt=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I am a Full Stack Developer focused on MERN, Headless Technology,
          WordPress and Shopify
        </p>
        <p className="about-desc">
          Hi There! I am a full stack developer with a strong programming
          background and experience in React.js, Node.js, Headless/Serverless
          applications, API development, MongoDB, PostgreSQL, WordPress, and
          Shopify. I have excellent communication skills and can communicate
          technical ideas clearly and effectively. I am an extrovert
          professional, and an excellent team player who knows how to do the job
          efficiently and effectively. I am currently open to projects and full
          time opportunities (remote/relocation).
        </p>
      </div>
    </div>
  );
};

export default About;
