import React, { useContext } from "react";
import "./Intro.css";
import Me from "../../img/me-min.png";
import { ThemeContext } from "../../Context";
const Intro = () => {
  const handleScroll = () => {
    window.scroll({
      top: 1000,
      left: 100,
      behavior: "smooth",
    });
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="my-intro" className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-title">Hello, My name is</h2>
          <h1 className="intro-name">Safin Ahmed</h1>
          <div className="job-title">
            <div className="job-title-wrapper">
              <div className="job-title-item">Fullstack Developer</div>
              <div className="job-title-item">Javascript Developer</div>
              <div className="job-title-item">ReactJS Developer</div>
              <div className="job-title-item">NextJS Developer</div>
              <div className="job-title-item">NodeJS Developer</div>
            </div>
          </div>
          <div className="job-desc">
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web
              applications and online stores.
            </p>
          </div>
        </div>
        <svg
          style={{ cursor: "pointer" }}
          onClick={handleScroll}
          fill={darkMode ? "#fff" : "green"}
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
          enable-background="new 0 0 100 100"
          xmlSpace="preserve"
        >
          <g>
            <path d="M48.004,35.177V16.824l-4.59,4.59c-0.781,0.781-2.046,0.781-2.828,0c-0.782-0.781-0.782-2.047,0-2.828l8-8   c0.781-0.781,2.047-0.781,2.828,0l8,8c0.781,0.781,0.781,2.047,0,2.828C59.023,21.805,58.512,22,58,22s-1.023-0.195-1.414-0.586   l-4.596-4.596v18.363l4.596-4.595c0.781-0.782,2.047-0.782,2.828,0c0.781,0.781,0.781,2.046,0,2.828l-8,8   C51.023,41.805,50.512,42,50,42s-1.023-0.195-1.414-0.586l-8-8c-0.782-0.781-0.782-2.047,0-2.828c0.781-0.782,2.046-0.782,2.828,0   L48.004,35.177z M86,36v28c0,19.85-16.149,36-35.998,36c-19.85,0-35.998-16.15-35.998-36V50.019C14.004,50.012,14,50.006,14,50   s0.004-0.012,0.004-0.019V36c0-19.851,16.148-36,35.998-36C69.851,0,86,16.149,86,36z M18.004,36v12H82V36   C82,18.355,67.646,4,50.002,4C32.358,4,18.004,18.355,18.004,36z M82,64V52H18.004v12c0,17.645,14.354,32,31.998,32   C67.646,96,82,81.645,82,64z" />
          </g>
        </svg>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} className="intro-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
