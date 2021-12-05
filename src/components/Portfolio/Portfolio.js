import React, { useContext } from 'react';
import './Portfolio.css';
import { BsFillEyeFill } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';
import { ThemeContext } from '../../Context';
import { Link } from 'react-router-dom';
const Portfolio = ({ project }) => {
    const { img, link, id } = project;
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className="bg-overlay">
                <div className="view-icon">
                    <a style={{ textDecoration: "none", color: darkMode ? '#fff' : '#000' }} href={link} target="_blank"><BsFillEyeFill className="project-icon" /></a>
                </div>
                <div className="detail-icon">
                    <Link style={{ textDecoration: "none", color: darkMode ? '#fff' : '#000' }} to={`/projects/${id}`}><CgDetailsMore className="project-icon" /></Link>
                </div>
            </div>
            <a href={link} target="_blank">
                <img src={img} className="p-img" alt="" />
            </a>
        </div>
    );
};

export default Portfolio;