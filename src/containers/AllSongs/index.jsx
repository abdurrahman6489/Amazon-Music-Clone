import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import LINKS from "../links";
import Song from "../AmazonMusic/components/Song";
import "./style.css";
const AllSongs = () => {
  const { allSongs } = useSelector((state) => state.allSongs);
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mt: "1vh",
        mb: "8vh",
      }}
    >
      <Box flex={1}></Box>
      <Box
        flex={50}
        sx={{ border: "1px solid black", maxWidth: "92dvw", p: 5 }}
      >
        <h1 style={{ color: "white", textAlign: "left" }}>All Songs</h1>
        <div className="song-container">
          {allSongs?.map((song) => (
            <Song {...song} key={song._id} />
          ))}
        </div>
      </Box>
      <Box flex={1}></Box>
    </Stack>
  );
};

export default AllSongs;
