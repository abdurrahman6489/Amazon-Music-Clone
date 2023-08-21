import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SensorsIcon from "@mui/icons-material/Sensors";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PauseIcon from "@mui/icons-material/Pause";
import { Fab } from "@mui/material";
import CustomTheme from "../AmazonMusic/CustomTheme";

import { setPlayerPlaying } from "../../App/features/albums/selectedAlbumSlice";
import { useDispatch, useSelector } from "react-redux";

const primaryColor = "hsl(0, 0%, 100%)";
const secondaryColor = "hsl(183, 71%, 50%)";

const SongDetails = ({
  title,
  artists,
  description,
  songs,
  image,
  release,
}) => {
  const { playerPlaying } = useSelector((state) => state.selectedAlbums);
  const dispatch = useDispatch();
  return (
    <>
      <Card
        sx={{
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          backgroundColor: "inherit",
          border: "none",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 300, height: 300 }}
          image={image}
          alt={title}
        />
        <CustomTheme
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
              border: "none",
            }}
          >
            <CardContent>
              <Typography component="div" variant="subtitle1" color="secondary">
                ALBUM
              </Typography>
              <Typography component="div" variant="h3" color="primary">
                {title}
              </Typography>
              <Typography component="div" variant="body1" color="primary">
                {description}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                component="div"
                noWrap
                sx={{ width: 200 }}
              >
                {artists?.map((artist) => artist.name).join(", ")}
              </Typography>
              <Typography variant="subtitle1" color="primary" component="div">
                {songs?.length}
                {" songs"}
                {" | "}
                {/* {duration}
                {" | "} */}
                {new Date(release).toLocaleString()}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
                textAlign: {
                  xs: "leftt",
                  sm: "left",
                  md: "center",
                  lg: "center",
                },
              }}
            >
              {/* <IconButton aria-label="previous"> */}
              <Fab
                variant="extended"
                color="secondary"
                onClick={() => dispatch(setPlayerPlaying(playerPlaying))}
              >
                {!playerPlaying ? <PlayArrowIcon /> : <PauseIcon />}{" "}
                {!playerPlaying ? "Play" : "Pause"}
              </Fab>
              {/* </IconButton> */}
              <IconButton aria-label="Shuffle" color="primary">
                <ShuffleIcon />
              </IconButton>
              <IconButton aria-label="Add to wishlist" color="primary">
                <AddIcon />
              </IconButton>
              <IconButton aria-label="next" color="primary">
                <SensorsIcon />
              </IconButton>
              <IconButton aria-label="next" color="primary">
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
        </CustomTheme>
      </Card>
    </>
  );
};

export default SongDetails;
