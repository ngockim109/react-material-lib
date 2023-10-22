import React from "react";
import ListMovie from "../../organisms/list-movie";
import { Box } from "@mui/material";
import Discovery from "../../templates/discovery";

const Home = () => {
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
        <Discovery />
      </div>
    </Box>
  );
};

export default Home;
