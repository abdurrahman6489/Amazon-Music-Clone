import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AiFillPlayCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import LINKS from "../../../links";
import { styles } from "./index.style";
import { Box, Fab } from "@mui/material";

const Song = ({ title, album, artist, mood, thumbnail, audio_url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const setHoverTrue = () => setIsHovered(true);
  const setHoverFalse = () => setIsHovered(false);

  const navigate = useNavigate();
  return (
    <Card sx={styles.CONTAINER_STYLE}>
      <Box
        component="div"
        sx={styles.IMG_BOX_STYLE}
        onMouseOver={setHoverTrue}
        onMouseOut={setHoverFalse}
        onClick={() => navigate(`${LINKS.playlist}/${album}`)}
      >
        <CardMedia
          component="img"
          height="135"
          image={thumbnail}
          alt={title}
          sx={{ ...styles.IMAGE_STYLE }}
        />
        {isHovered && (
          <Fab color="error" size="small" sx={styles.FAB_BTN_STYLE}>
            <AiFillPlayCircle size={40} color="hsla(0, 0%, 5%, 0.8)" />
          </Fab>
        )}
      </Box>
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          noWrap
          sx={styles.TITLE_STYLE}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          sx={styles.ARTISTS_STYLE}
        >
          {artist?.map((artist) => artist.name).join(" ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Song;
