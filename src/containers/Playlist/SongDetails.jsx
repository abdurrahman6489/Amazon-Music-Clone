import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PauseIcon from "@mui/icons-material/Pause";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { Fab, Checkbox } from "@mui/material";

import CustomTheme from "../AmazonMusic/CustomTheme";

import {
  setPlayerPlaying,
  shuffleSongs,
} from "../../App/features/albums/selectedAlbumSlice";
import { setOpen } from "../../App/features/comingSoon/comingSoonSlice";
import { useDispatch, useSelector } from "react-redux";

import { SONG_DETAILS_COLOR } from "../AmazonMusic/constants";
import { useAuthenticate } from "../../Utils/CustomHook";

import { styles } from "./songDetails.style";

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
  openModal,
}) => {
  const { playerPlaying } = useSelector((state) => state?.selectedAlbums);
  const authenticate = useAuthenticate();
  const dispatch = useDispatch();

  const handleShuffleSongs = () => {
    if (!authenticate()) return;
    dispatch(shuffleSongs());
  };
  const handleAddRemove = () => {
    if (!authenticate()) return;
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

  const handlePlay = () => {
    if (!authenticate()) return;
    dispatch(setPlayerPlaying(playerPlaying));
  };
  return (
    <>
      <Card sx={styles.CONTAINER_STYLE}>
        <CardMedia
          component="img"
          sx={styles.IMAGE_STYLE}
          image={image}
          alt={title}
        />
        <CustomTheme {...SONG_DETAILS_COLOR}>
          <Box
            sx={{
              ...styles.ALIGN_ITEMS_STYLE,
              ...styles.DETAILS_CONTAINER_STYLE,
            }}
          >
            <CardContent
              sx={{
                ...styles.ALIGN_ITEMS_STYLE,
                ...styles.CARD_CONTENT_STYLE,
              }}
            >
              <Typography
                component="div"
                variant="subtitle1"
                color="secondary"
                sx={{ ...styles.TEXT_ALIGN_STYLE }}
              >
                ALBUM
              </Typography>
              <Typography
                component="div"
                variant="h6"
                color="primary"
                sx={{
                  ...styles.TITLE_STYLE,
                  ...styles.TEXT_ALIGN_STYLE,
                }}
                noWrap
              >
                {title}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="primary"
                sx={{ ...styles.TEXT_ALIGN_STYLE }}
              >
                {description}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                component="div"
                noWrap
                sx={{
                  ...styles.ARTISTS_NAME_STYLE,
                  ...styles.TEXT_ALIGN_STYLE,
                }}
              >
                {artists?.map((artist) => artist.name).join(", ")}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                component="div"
                sx={{ ...styles.TEXT_ALIGN_STYLE }}
              >
                {songs?.length}
                {" songs"}
                {" | "}
                {/* {duration}
                {" | "} */}
                {new Date(release).toLocaleString()}
              </Typography>
            </CardContent>
            <Box sx={styles.BTN_CONTAINER_STYLE}>
              <Fab variant="extended" color="secondary" onClick={handlePlay}>
                {!playerPlaying ? <PlayArrowIcon /> : <PauseIcon />}{" "}
                {!playerPlaying ? "Play" : "Pause"}
              </Fab>
              <IconButton
                aria-label="Shuffle"
                color="primary"
                onClick={handleShuffleSongs}
              >
                <ShuffleIcon />
              </IconButton>
              <Checkbox
                aria-label="Add to wishlist"
                color="primary"
                checked={isDataSaved}
                onChange={handleAddRemove}
                icon={<AddIcon color="primary" fontSize="large" />}
                checkedIcon={<RemoveCircleOutlineIcon fontSize="large" />}
              />
              <IconButton
                aria-label="next"
                color="primary"
                onClick={() => openModal()}
              >
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
