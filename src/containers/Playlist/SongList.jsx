import React from "react";
import { Box, Stack, Typography, List, ListItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
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
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAudioTrackIndex({ audioTrackIndex: songNo - 1 }));
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1em",
        mt: 5,
        mb: 5,
        cursor: "pointer",
      }}
      className="songLIst"
      onClick={handleClick}
    >
      <Box component="div" flex={1} sx={{ ml: 4 }}>
        <Typography variant="h6" color="#FFF">
          {songNo}
        </Typography>
      </Box>
      <Box component="div" flex={1}>
        <img src={thumbnail} height="50px" width="50px" />
      </Box>
      <Box component="div" flex={10}>
        <Typography variant="h6" color="#FFF" sx={{ textAlign: "left" }}>
          {title}
        </Typography>
        {/* <Typography variant="body2" color="#FFF" sx={{ textAlign: "left" }}>
          {artistName}
        </Typography> */}
      </Box>

      <CustomTheme
        primaryColor={SONG_LIST_COLOR.PRIMARY_COLOR}
        secondaryColor={SONG_LIST_COLOR.PRIMARY_COLOR}
      >
        <Box
          component="div"
          flex={4}
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <Typography variant="body2" color="#FFF">
            {/* {songDuration} */}
            03 : 00
          </Typography>
        </Box>
        <Box component="div" flex={2}>
          <IconButton aria-label="Add to wishlist" color="primary">
            <AddIcon />
          </IconButton>
        </Box>
        <Box component="div" flex={2}>
          <IconButton aria-label="Add to wishlist" color="primary">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </CustomTheme>
    </Stack>
  );
};

export default SongList;
