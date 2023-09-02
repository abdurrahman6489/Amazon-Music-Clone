import { PermDeviceInformationSharp } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./index.style";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setFilterBy } from "../../App/features/SearchSongs/SearchSongSlice";
import LINKS from "../links";
import { SONG_FILTERS, filterByObj } from "../AmazonMusic/constants";

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (mood) => {
    dispatch(setFilterBy(filterByObj.mood));
    navigate(`${LINKS.genres}/${mood}`);
  };

  return (
    <>
      <Box sx={styles.CONTAINER_STYLE}>
        <Box sx={styles.BOX_STYLE}>
          <Typography variant="h6" color="white">
            Mood & Activities
          </Typography>
          <Box
            component="div"
            variant="div"
            textAlign="center"
            sx={styles.BTN_CONTAINER_STYLE}
          >
            {SONG_FILTERS?.map((filter) => (
              <Button
                sx={styles.BUTTON_STYLE}
                onClick={() => handleClick(filter.mood)}
              >
                {filter.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
