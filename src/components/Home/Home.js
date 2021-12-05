import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import PortfolioList from '../PortfolioList/PortfolioList';
import Resume from '../Resume/Resume';
import Toggle from '../Toggle/Toggle';

const Home = () => {
    return (
        <div>
            <Resume />
            <Toggle />
            <Intro></Intro>
            <About></About>
            <PortfolioList></PortfolioList>
            <Contact></Contact>
        </div>
    );
};

export default Home;