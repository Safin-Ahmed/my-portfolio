import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const SkillCard = ({ image }) => {
  return (
    <>
      <Grid sx={{ display: { xs: "none", md: "block" } }} item lg={2}>
        <img
          style={{ width: 150, height: 150, objectFit: "contain" }}
          src={image}
          alt={image}
        />
      </Grid>
      <Grid sx={{ display: { xs: "block", md: "none" } }} item xs={6}>
        <img
          style={{ width: 100, height: 100, objectFit: "contain" }}
          src={image}
          alt={image}
        />
      </Grid>
    </>
  );
};

export default SkillCard;
