import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useNavigate } from "react-router-dom";

import LINKS from "../../../links";
import { styles } from "./index.style";

const Song = ({ title, album, artist, mood, thumbnail, audio_url }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={styles.CONTAINER_STYLE}
      onClick={() => navigate(`${LINKS.playlist}/${album}`)}
    >
      <CardMedia
        component="img"
        height="130"
        image={thumbnail}
        alt={title}
        sx={styles.IMAGE_STYLE}
      />
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
