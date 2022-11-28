import React from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="navbar">
      <div className="resume">
        <button className="resume-btn">
          <a href="Resume.pdf" download>
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
