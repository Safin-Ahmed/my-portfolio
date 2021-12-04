import { useContext } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import PortfolioList from './components/PortfolioList/PortfolioList';
import Resume from './components/Resume/Resume';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext, ThemeProvider } from './Context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Resume />
      <Toggle />
      <Intro></Intro>
      <About></About>
      <PortfolioList></PortfolioList>
      <Contact></Contact>
    </div>
  );
}

export default App;
