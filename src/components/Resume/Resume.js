import React from 'react';
import './Resume.css';
const Resume = () => {
    return (
        <div className="resume">
            <button className="resume-btn"><a href="Resume.pdf" download>Download Resume</a></button>
        </div>
    );
};

export default Resume;