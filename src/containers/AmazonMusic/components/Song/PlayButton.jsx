import React from "react";
import { Fab } from "@mui/material";
import { AiFillPlayCircle } from "react-icons/ai";
import { styles } from "./playButton.style";

const PlayButton = ({ isHovered, fabSize, iconSize }) => {
  return (
    <>
      {isHovered && (
        <Fab color="error" size={fabSize} sx={styles.FAB_BTN_STYLE}>
          <AiFillPlayCircle size={iconSize} color="hsla(0, 0%, 5%, 0.8)" />
        </Fab>
      )}
    </>
  );
};

export default PlayButton;
