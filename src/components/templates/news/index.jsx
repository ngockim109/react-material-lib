import { Container, Typography } from "@mui/material";
import React from "react";
import ListNews from "../../organisms/list-news";

const NewsContent = () => {
  return (
    <Container
      width="100%"
      style={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="text.highlight">
        News
      </Typography>
      <ListNews />
    </Container>
  );
};

export default NewsContent;
