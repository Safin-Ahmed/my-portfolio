import React from 'react';
import { Link } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc'
import './Resume.css';
const Resume = () => {
    return (
        <div className="navbar">
            <div className="resume">
                <button className="resume-btn"><a href="Resume.pdf" download>Download Resume</a></button>
            </div>
            <div className="mobile-menu">
                <ul className="mobile-nav">
                    <Link className="navlink" to="/">Home</Link>
                    <Link className="navlink" to="/about">About</Link>
                    <Link className="navlink" to="/blogs">Blogs</Link>
                    <Link className="navlink" to="/projects">Projects</Link>
                </ul>
            </div>
            <div className="mainmenu">
                <ul className="nav">
                    <Link className="navlink" to="/">Home</Link>
                    <Link className="navlink" to="/about">About</Link>
                    <Link className="navlink" to="/blogs">Blogs</Link>
                    <Link className="navlink" to="/projects">Projects</Link>
                </ul>

            </div>
        </div>

    );
};

export default Resume;