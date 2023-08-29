import React from "react";
import { Box, Stack, Typography, Fab } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomTheme from "../../../CustomTheme";

import { BODY_PLAYLIST_BTN_COLOR, FONT_STYLE } from "../../../constants";

const PlayListController = ({ playListName, next, prev, box, seeAllSongs }) => {
  const handleClick = () => {
    console.log("see all clicked");
    seeAllSongs();
  };

  return (
    <Box component="div" sx={{ mb: "2vh", maxWidth: "92dvw" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5em",
        }}
      >
        <Typography
          variant="h6"
          color="#FFF"
          noWrap
          sx={{
            ...FONT_STYLE,
            textAlign: "left",
            width: { xs: 200, sm: 200, md: 300, lg: 300 },
          }}
        >
          {playListName}
        </Typography>

        <Box sx={{ textAlign: "right" }}>
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
