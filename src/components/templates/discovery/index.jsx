import { Container, Typography } from "@mui/material";
import React from "react";
import ListMovie from "../../organisms/list-movie";

const Discovery = () => {
  return (
    <Container width="100%" style={{ margin: "20px 0" }}>
      <Typography variant="h4" color="text.highlight" fontWeight={700}>
        Discovery
      </Typography>
      <ListMovie />
    </Container>
  );
};

export default Discovery;
