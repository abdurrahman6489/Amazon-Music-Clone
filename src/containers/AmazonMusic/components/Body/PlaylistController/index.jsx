import React from "react";
import { Box, Stack, Typography, Fab } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomTheme from "../../../CustomTheme";

import { BODY_PLAYLIST_BTN_COLOR, FONT_STYLE } from "../../../constants";

const PlayListController = ({ playListName, next, prev, box }) => {
  return (
    <Box component="div" sx={{ mb: "2vh", maxWidth: "92dvw" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography
          variant="h6"
          color="#FFF"
          noWrap
          sx={{ ...FONT_STYLE, width: 300, textAlign: "left" }}
        >
          {playListName}
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <CustomTheme {...BODY_PLAYLIST_BTN_COLOR}>
          <Fab color="primary" size="small" onClick={() => prev()}>
            <ChevronLeftIcon />
          </Fab>
          <Fab color="primary" size="small">
            <ChevronRightIcon onClick={() => next()} />
          </Fab>
          <Fab color="primary" variant="extended">
            <Typography variant="button">SEE ALL</Typography>
          </Fab>
        </CustomTheme>
      </Stack>
    </Box>
  );
};

export default PlayListController;
