import React from "react";
import { Box, Stack, Typography, Fab } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomTheme from "../../../CustomTheme";

import { BODY_PLAYLIST_BTN_COLOR } from "../../../constants";
import { styles } from "./index.style";

const PlayListController = ({ playListName, next, prev, box, seeAllSongs }) => {
  const handleClick = () => {
    seeAllSongs();
  };

  return (
    <Box component="div" sx={styles.CONTAINER_STYLE}>
      <Stack sx={styles.STACK_STYLE}>
        <Typography variant="h6" color="#FFF" noWrap sx={styles.TITLE_STYLE}>
          {playListName}
        </Typography>

        <Box sx={styles.BTN_CONTAINER_STYLE}>
          <CustomTheme {...BODY_PLAYLIST_BTN_COLOR}>
            <Fab color="primary" size="small" onClick={() => prev()}>
              <ChevronLeftIcon />
            </Fab>
            <Fab color="primary" size="small">
              <ChevronRightIcon onClick={() => next()} />
            </Fab>
            <Fab color="primary" variant="extended" onClick={handleClick}>
              <Typography variant="button">SEE ALL</Typography>
            </Fab>
          </CustomTheme>
        </Box>
      </Stack>
    </Box>
  );
};

export default PlayListController;
