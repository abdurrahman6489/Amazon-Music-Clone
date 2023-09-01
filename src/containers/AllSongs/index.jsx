import { Box, Stack, Grid } from "@mui/material";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import LINKS from "../links";
import Song from "../AmazonMusic/components/Song";
import "./style.css";
import { styles } from "./index.style";
const AllSongs = () => {
  const { allSongs } = useSelector((state) => state.allSongs);

  return (
    <Box sx={styles.BOX_STYLE}>
      <h1 style={{ color: "white", textAlign: "left" }}>All Songs</h1>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
        rowSpacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}
      >
        {allSongs?.map((song) => (
          <Grid item xs={4} sm={4} md={3} lg={2}>
            <Song {...song} key={song._id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllSongs;
{
  /* <div style={styles.CARD_CONTAINER_STYLE}>
        {allSongs?.map((song) => (
          <Song {...song} key={song._id} />
        ))}
      </div> */
}
