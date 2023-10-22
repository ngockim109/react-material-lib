import React from "react";
import ListOfFilms from "../../../shared/ListOfFilms";
import MovieCard from "../../molecules/card";
import { Box, Container } from "@mui/material";

const ListMovie = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        width: {
          xs: "190px",
          sm: "586px",
          md: "910px",
          lg: "910px",
          xl: "1178px",
        },
      }}
      maxWidth="false"
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
    </Container>
  );
};

export default ListMovie;
