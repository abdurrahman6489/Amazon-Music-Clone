import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Stack, List } from "@mui/material";
import { useParams } from "react-router-dom";
import SongDetails from "./SongDetails";
import SongList from "./SongList";
import Loader from "../AmazonMusic/components/Loader";
import { getSelectedAlbum } from "../../App/features/albums/selectedAlbumSlice";
import { useSelector, useDispatch } from "react-redux";

const songObject = (selectedAlbum) => {
  const { title, artists, description, songs, image, release } = selectedAlbum;
  return { title, artists, description, songs, image, release };
};

const Playlist = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, selectedAlbum } = useSelector(
    (state) => state.selectedAlbums
  );

  useEffect(() => {
    dispatch(getSelectedAlbum(id));
  }, []);

  if (loading) return <Loader />;
  console.log("from playlist component ", selectedAlbum);

  const allSongs = selectedAlbum?.songs?.map((song, index) => (
    <SongList {...song} songNo={index + 1} key={song._id} />
  ));

  return (
    <Box component="div" sx={{ mb: "5vh" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box flex={1}></Box>
        <Box flex={50}>
          <Box
            component="div"
            style={{
              position: "relative",
              maxWidth: "100%",
              mb: "5vh",
              border: "none",
            }}
          >
            <img
              src={selectedAlbum.image}
              style={{
                width: "50%",
                aspectRatio: "2/1",
                objectFit: "cover",
                filter: "blur(50px)",
              }}
            />
            <Box
              component="div"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
              }}
            >
              <SongDetails {...songObject(selectedAlbum)} />
            </Box>
          </Box>
          {allSongs}
        </Box>
        <Box flex={1}></Box>
      </Stack>
    </Box>
  );
};

export default Playlist;
