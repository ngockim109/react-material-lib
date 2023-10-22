import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link, Paper, Stack } from "@mui/material";
import ModalMovieDetail from "../modal-movie-detail";

export default function MovieCard({
  url,
  rating,
  title,
  images,
  description,
  movie,
}) {
  return (
    // <Paper elevation={2} sx={{ height: 270, width: 190 }}>
    <Paper
      elevation={2}
      sx={{
        margin: "5px",
        flex: {
          xs: "1 0 100%",
          sm: "1 0 20%",
          lg: "1 0 11%",
          xl: "1 0 11%",
        },
      }}
    >
      <img
        src={url}
        alt={title}
        style={{ width: "100%", objectFit: "contain" }}
      ></img>
      <Typography variant="span" component="div">
        {rating}
      </Typography>
      <div style={{ display: "flex" }}>
        <ModalMovieDetail
          url={url}
          rating={rating}
          title={title}
          images={images}
          description={description}
        />
        <Button size="small" color="inherit">
          <Link href={`/detail/${title}`} underline="none" color="inherit">
            View More
          </Link>
        </Button>
      </div>
      {/* <Card sx={{ width: "100%", height: "100%" }}>
         <CardMedia
          component="img"
          image={url}
          title={title}
          sx={{ objectFit: "contain" }}
        /> 
        <img
          src={url}
          alt={title}
          style={{ width: "100%", objectFit: "contain" }}
        ></img>
        <CardContent sx={{ paddingBottom: "0" }}>
          <Typography variant="span" component="div">
            {rating}
          </Typography>
        </CardContent>
        <CardActions>
          <ModalMovieDetail
            url={url}
            rating={rating}
            title={title}
            images={images}
            description={description}
          />
          <Button size="small" color="inherit">
            <Link href={`/detail/${title}`} underline="none" color="inherit">
              View More
            </Link>
          </Button>
        </CardActions>
      </Card> */}
    </Paper>
  );
}