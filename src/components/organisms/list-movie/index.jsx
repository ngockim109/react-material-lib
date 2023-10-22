import React from "react";
import ListOfFilms from "../../../shared/ListOfFilms";
import MovieCard from "../../molecules/card";
import { Box, Container, Grid } from "@mui/material";

const ListMovie = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "20px 0",
      }}
    >
      <Grid
        container
        spacing={1}
        columns={16}
        sx={{
          width: {
            xs: "300px",
            sm: "550px",
            md: "740px",
            lg: "980px",
            xl: "1180px",
            xxl: "1380px",
          },
        }}
      >
        {ListOfFilms.map((movie, index) => (
          <MovieCard
            key={index++}
            url={movie.Poster}
            title={movie.Title}
            rating={movie.imdbRating}
            images={movie.Images}
            description={movie.Plot}
            id={index++}
            movie={movie}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListMovie;
