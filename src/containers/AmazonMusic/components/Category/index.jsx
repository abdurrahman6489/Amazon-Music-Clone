import React, { useRef } from "react";
import Song from "../Song";
import PlayListController from "../Body/PlaylistController";

import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Category = ({ mood }) => {
  const location = useLocation();
  console.log(location);

  let songs;
  let filterFunction = (song) => song.mood == mood;
  songs = useSelector((state) => state.albums.albums);

  if (location.pathname.startsWith("/genres")) {
    songs = useSelector((state) => state.searchSong.searchSongs);
    filterFunction = (song) => true;
  }

  console.log(songs);

  const boxRef = useRef();

  const nextCards = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    console.log(width);
    console.log(boxRef);
    console.log(boxRef.current.scrollLeft);
  };

  const prevCards = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    console.log(width);
    console.log(boxRef.current.scrollLeft);
  };

  return (
    <>
      <PlayListController
        playListName={"Featured This Week"}
        next={nextCards}
        prev={prevCards}
        box={boxRef}
      />
      <Box
        component="div"
        sx={{
          maxWidth: "92dvw",
          position: "relative",
          overflow: "hidden",
          mb: "2vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            overflow: "hidden",
            scrollBehavior: "smooth",
          }}
          ref={boxRef}
        >
          {songs?.filter(filterFunction).map((song) => (
            <Song key={song._id} {...song} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Category;
