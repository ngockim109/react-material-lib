import React from "react";
import ListNews from "../../organisms/list-news";
import NewsContent from "../../templates/news";
import { Box } from "@mui/material";

const News = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NewsContent />
      </div>
    </Box>
  );
};

export default News;
