import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Toolbar } from "@mui/material";
import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import PortfolioList from "../PortfolioList/PortfolioList";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Skills />
      <PortfolioList></PortfolioList>
      <Contact></Contact>
    </div>
  );
};

export default Home;
