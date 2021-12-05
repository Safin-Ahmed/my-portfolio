import { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AboutPage from './components/AboutPage/AboutPage';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Intro from './components/Intro/Intro';
import PortfolioList from './components/PortfolioList/PortfolioList';
import Project from './components/Project/Project';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext, ThemeProvider } from './Context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <BrowserRouter>
        <Resume /><Toggle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:projectId" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
