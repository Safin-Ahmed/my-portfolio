import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AboutPage from "./components/AboutPage/AboutPage";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import ScrollTop from "./components/Navbar/ScrollTop";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Project from "./components/Project/Project";
import Projects from "./components/Projects/Projects";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext, ThemeProvider } from "./Context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  if (darkMode) {
    document.body.style.backgroundColor = "#222222";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Toolbar id="back-to-top-anchor" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:projectId" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
