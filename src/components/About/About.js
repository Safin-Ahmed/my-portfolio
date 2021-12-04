import React, { useContext } from 'react';
import './About.css';
import aboutImg from '../../img/about.jpg';
import { ThemeContext } from '../../Context';
const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="about">
            <div className="about-left">
                <div style={{ backgroundColor: darkMode && "#59b256" }} className="about-card bg"></div>
                <div className="about-card">
                    <img style={{ filter: darkMode && `grayscale(${0})` }} className="about-img" src={aboutImg} alt="" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    I am Safin Ahmed. Web, WordPress  WooCommerce/Shopify/Wix/ SquareSpace Developer, Dropship  eCommerce Expert
                </p>
                <p className="about-desc">
                    As a freelancer I have Completed 200+ Projects of 78 country's 362 client's at various marketplaces since 2021
                    Former Top Rated Web Developer @Upwork / Level-2 seller, Fiverr, and Ex Co-Founder of Sanfaex Tech (www.sanfaextech.com)
                    Now working as a full time MERN stack web developer and Shopify expert on Fiverr as a level 2 seller.
                </p>
            </div>
        </div>
    );
};

export default About;