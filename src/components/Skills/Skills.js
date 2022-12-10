import React from "react";
import { skills } from "./skill_data";
import "../PortfolioList/PortfolioList.css";
import SkillCard from "./SkillCard";
import { Grid } from "@mui/material";
const Skills = () => {
  return (
    <div id="skills" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Skills</h1>
        <p className="pl-desc">
          These are my skills that I am highly confident about
        </p>
      </div>
      <Grid
        sx={{ mt: 5, mb: 15 }}
        container
        spacing={2}
        rowSpacing={5}
        justifyContent="center"
      >
        {skills.map((item) => (
          <SkillCard key={item} image={item} />
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
