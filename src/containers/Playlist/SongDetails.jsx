import * as React from "react";
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
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { Fab, Checkbox } from "@mui/material";

import CustomTheme from "../AmazonMusic/CustomTheme";

import { setPlayerPlaying } from "../../App/features/albums/selectedAlbumSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  SONG_DETAILS_COLOR,
  SONG_DETAILS_ALIGN_ITEMS,
  SONG_DETAILS_TEXT_ALIGN,
} from "../AmazonMusic/constants";

const SongDetails = ({
  title,
  artists,
  description,
  songs,
  image,
  release,
  _id,
  isDataSaved,
  addDeleteSavedData,
}) => {
  const { playerPlaying } = useSelector((state) => state.selectedAlbums);
  const dispatch = useDispatch();
  // console.log(_id);
  const handleAddRemove = () => {
    console.log("addRemoved clicked");
    addDeleteSavedData({
      title,
      artists,
      description,
      songs,
      image,
      release,
      _id,
    });
  };
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "flex-start",
          alignItems: "center",
          gap: { xs: "0.5em", sm: "0.5em", md: "1em", lg: "1em" },
          backgroundColor: "inherit",
          border: "none",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 300,
            height: 300,
          }}
          image={image}
          alt={title}
        />
        <CustomTheme {...SONG_DETAILS_COLOR}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              ...SONG_DETAILS_ALIGN_ITEMS,
              border: "none",
            }}
          >
            <CardContent
              sx={{
                // border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                ...SONG_DETAILS_ALIGN_ITEMS,
              }}
            >
              <Typography
                component="div"
                variant="subtitle1"
                color="secondary"
                sx={{ ...SONG_DETAILS_TEXT_ALIGN }}
              >
                ALBUM
              </Typography>
              <Typography
                component="div"
                variant="h6"
                color="primary"
                sx={{
                  width: 300,
                  ...SONG_DETAILS_TEXT_ALIGN,
                  // border: "1px solid white",
                }}
                noWrap
              >
                {title}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="primary"
                sx={{ ...SONG_DETAILS_TEXT_ALIGN }}
              >
                {description}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                component="div"
                noWrap
                sx={{
                  width: 200,
                  ...SONG_DETAILS_TEXT_ALIGN,
                  // border: "1px solid white",
                }}
              >
                {artists?.map((artist) => artist.name).join(", ")}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                component="div"
                sx={{ ...SONG_DETAILS_TEXT_ALIGN }}
              >
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
              {/* <IconButton
                aria-label="Add to wishlist"
                color="primary"
                onClick={handleAddRemove}
              >
                <AddIcon />
              </IconButton> */}
              <Checkbox
                aria-label="Add to wishlist"
                color="primary"
                checked={isDataSaved}
                onChange={handleAddRemove}
                icon={<AddIcon color="primary" fontSize="large" />}
                checkedIcon={<RemoveCircleOutlineIcon fontSize="large" />}
              />
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
