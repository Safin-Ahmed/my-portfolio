import React from 'react';
import './Portfolio.css';
const Portfolio = ({ project }) => {
    const { img, link } = project;
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank">
                <img src={img} className="p-img" alt="" />
            </a>
        </div>
    );
};

export default Portfolio;