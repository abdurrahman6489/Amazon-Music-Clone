import React from "react";
import { Box, Stack, Typography, Checkbox, Fab } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PlayArrow } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import CustomTheme from "../AmazonMusic/CustomTheme";

import { useDispatch } from "react-redux";
import { setAudioTrackIndex } from "../../App/features/albums/selectedAlbumSlice";

import "./style.css";

import { SONG_LIST_COLOR } from "../AmazonMusic/constants";

const SongList = ({
  title,
  dateOfRelease,
  mood,
  thumbnail,
  audio_url,
  songNo,
  audioTrackIndex,
  _id,
  addRemoveSavedData,
  isSongSaved,
  album,
}) => {
  const dispatch = useDispatch();
  console.log(album);
  // console.log(isSongSaved);

  const addOrRemoveSong = (name) => {
    console.log(name);
    addRemoveSavedData({
      title,
      dateOfRelease,
      mood,
      thumbnail,
      audio_url,
      _id,
      album,
    });
  };

  const handleClick = (event) => {
    dispatch(setAudioTrackIndex({ audioTrackIndex: songNo - 1 }));
  };

  return (
    <CustomTheme
      primaryColor={SONG_LIST_COLOR.PRIMARY_COLOR}
      secondaryColor={SONG_LIST_COLOR.SECONDARY_COLOR}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1em",
          cursor: "pointer",
          backgroundColor:
            audioTrackIndex == songNo - 1 ? "hsl(0, 0%, 10%)" : "inherit",
          ":hover": {
            backgroundColor: "hsl(0, 0%, 10%)",
          },
        }}
        name="playSong"
        onClick={(event) => {
          console.log(event.target);
          console.log(event.currentTarget);
          handleClick("playSong");
        }}
      >
        <Box component="div" flex={1} sx={{ ml: 4 }}>
          <Typography
            variant="h6"
            color={
              audioTrackIndex == songNo - 1 ? "hsl(183, 71%, 50%)" : "#FFF"
            }
          >
            {songNo}
          </Typography>
        </Box>
        <Box component="div" flex={1} style={{ position: "relative" }}>
          <img
            src={thumbnail}
            height="50px"
            width="50px"
            style={{ zIndex: 1 }}
          />
          {/* {audioTrackIndex == songNo - 1 && ( */}
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 4,

              size: "small",
            }}
            color={audioTrackIndex == songNo - 1 ? "secondary" : "primary"}
          >
            <PlayArrow />
          </IconButton>
          {/* )} */}
        </Box>
        <Box component="div" flex={10}>
          <Typography
            variant="h6"
            color={
              audioTrackIndex == songNo - 1 ? "hsl(183, 71%, 50%)" : "#FFF"
            }
            sx={{
              textAlign: "left",
              ":hover": { color: "hsl(183, 71%, 50%)" },
            }}
          >
            {title}
          </Typography>
          {/* <Typography variant="body2" color="#FFF" sx={{ textAlign: "left" }}>
          {artistName}
        </Typography> */}
        </Box>
        <Box
          component="div"
          flex={4}
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <Typography
            variant="body2"
            color={audioTrackIndex == songNo - 1 ? "secondary" : "primary"}
          >
            {/* {songDuration} */}
            03 : 00
          </Typography>
        </Box>

        <Box component="div" flex={2}>
          <Checkbox
            aria-label="Add to wishlist"
            color={audioTrackIndex == songNo - 1 ? "secondary" : "primary"}
            checked={isSongSaved}
            name="addSongs"
            onChange={(event) => {
              event.stopPropagation();
              console.log(event.currentTarget);
              addOrRemoveSong("addSongs");
            }}
            icon={
              <AddIcon
                fontSize="medium"
                color={audioTrackIndex == songNo - 1 ? "secondary" : "primary"}
              />
            }
            checkedIcon={
              <RemoveCircleOutlineIcon
                fontSize="medium"
                color={audioTrackIndex == songNo - 1 ? "secondary" : "primary"}
              />
            }
          />
        </Box>
        <Box component="div" flex={2}>
          <IconButton
            aria-label="Add to wishlist"
            color={audioTrackIndex == songNo - 1 ? "secondary" : "primary"}
            name="more"
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>
    </CustomTheme>
  );
};

export default SongList;
