import React from "react";
import { useParams } from "react-router-dom";
import ListOfFilms from "../../../shared/ListOfFilms";
import { Box, Container, Typography } from "@mui/material";

const MovieDetail = () => {
  const params = useParams();
  console.log(params);
  let movie = ListOfFilms.find((item) => item.Title === params.id);
  console.log(movie);
  const contents = [
    { id: "1", name: "Rating", value: movie.imdbRating },
    { id: "2", name: "Votes", value: movie.imdbVotes },
    { id: "3", name: "Runtime", value: movie.Runtime },
    { id: "4", name: "Director", value: movie.Director },
    { id: "5", name: "Starring", value: movie.Actors },
    { id: "6", name: "Country", value: movie.Country },
    { id: "7", name: "Year", value: movie.Year },
    { id: "8", name: "Description", value: movie.Plot },
  ];
  return (
    <Container style={{ margin: "30px 0" }}>
      <img
        src={movie.Images[0]}
        alt={movie.Title}
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      ></img>
      <div style={{ marginTop: "20px" }}>
        {contents.map((item) => (
          <Box key={item.id} display="flex" alignItems="center">
            <Typography color="red" variant="h6" fontWeight="600" width="140px">
              {item.name}
            </Typography>
            <Typography color="inherit" sx={{ offset: "3" }}>
              {item.value}
            </Typography>
          </Box>
        ))}

        {movie.Awards?.length ? null : (
          <Typography color="inherit">Awards: {movie.Awards}</Typography>
        )}
      </div>
    </Container>
  );
};

export default MovieDetail;
