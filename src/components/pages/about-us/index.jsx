import React from "react";
import Statistics from "../../organisms/statistics";
import { Grid } from "@mui/material";
import Reasons from "../../templates/reasons";
import Features from "../../organisms/features";
const AboutUs = () => {
  return (
    <Grid container direction="column" margin="50px 0">
      <Grid item order={{ xs: 1, md: 2 }}>
        <Reasons />
      </Grid>
      <Grid item order={{ xs: 2, md: 1 }}>
        <Statistics />
      </Grid>
      <Grid item order={{ xs: 3 }} padding="20px 50px">
        <Features />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
