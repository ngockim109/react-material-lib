import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardActions, CardContent, CardMedia, Link } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalMovieDetail({
  title,
  url,
  rating,
  images,
  description,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="inherit" size="small">
        Detail
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ width: "100%", height: "500px" }}>
            <CardMedia
              component="img"
              image={images[0]}
              title="green iguana"
              alt={title}
              sx={{ height: "100%" }}
            />
          </Card>
          <Typography variant="span" component="div" sx={{ marginTop: "6px" }}>
            {rating}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Button size="small" color="inherit">
            <Link href={`/detail/${title}`} underline="none" color="inherit">
              View More
            </Link>
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
