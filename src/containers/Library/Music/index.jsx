import React, { useEffect } from "react";
import Category from "../../AmazonMusic/components/Category";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./style.css";
import { styles } from "../style";

import { useNavigate } from "react-router";
import LINKS from "../../links";

const Music = () => {
  const { savedSongs, isLoggedIn } = useSelector((state) => state?.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate(LINKS.login);
  }, [isLoggedIn]);

  return (
    <Box sx={styles.BOX_STYLE}>
      <Category
        mood={"allAlbums"}
        songs={savedSongs}
        playListName={"All saved Albums"}
        key={"allAlbums"}
        isFilter={false}
      />
    </Box>
  );
};

export default Music;
