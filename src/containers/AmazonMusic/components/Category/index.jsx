import React, { useRef } from "react";
import Song from "../Song";

import { Box, Stack, Typography } from "@mui/material";
import PlayListController from "../Body/PlaylistController";

import { useSelector } from "react-redux";

const Category = ({ mood }) => {
  const songs = useSelector((state) => state.albums.albums);
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
          // border: "1px solid blue",
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
          {songs
            ?.filter((song, index) => song.mood == mood)
            .map((song) => (
              <Song key={song._id} {...song} />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Category;
