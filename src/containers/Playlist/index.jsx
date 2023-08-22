import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Stack, List, Divider } from "@mui/material";
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
    <>
      {index !== 0 && <Divider />}
      <SongList {...song} songNo={index + 1} key={song._id} />
    </>
  ));

  return (
    <>
      <Box>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${selectedAlbum.image})`,
            backgroundSize: "cover",
            width: "100%",
            height: "50vh",
            position: "absolute",
            zIndex: 1,
            left: 0,
            right: 0,
            filter: "blur(30px)",
          }}
        ></Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 2,
            opacity: 0.8,
          }}
        >
          <SongDetails {...songObject(selectedAlbum)} />
          <Box sx={{ mt: "5vh", mb: "15vh" }}>{allSongs}</Box>
        </Box>
      </Box>
    </>
  );
};

export default Playlist;

{
  /* <Box component="div" sx={{ mb: "5vh" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
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
      </Stack>
    </Box> */
}
