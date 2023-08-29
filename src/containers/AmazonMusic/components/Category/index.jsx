import React, { useRef } from "react";
import Song from "../Song";
import PlayListController from "../Body/PlaylistController";

import { Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { getAllSongs } from "../../../../App/features/allSongs/allSongsSlice";
import { useNavigate } from "react-router";
import LINKS from "../../../links";
const Category = ({ mood, playListName, songs, isFilter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let filterFunction;
  if (isFilter) {
    filterFunction = (song) => song.mood === mood;
  } else filterFunction = (song) => true;

  let filteredSongs = songs?.filter(filterFunction);
  const boxRef = useRef();

  const nextCards = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    // console.log(width);
    // console.log(boxRef);
    // console.log(boxRef.current.scrollLeft);
  };

  const prevCards = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    // console.log(width);
    // console.log(boxRef.current.scrollLeft);
  };

  const seeAllSongs = () => {
    dispatch(getAllSongs(filteredSongs));
    navigate(LINKS.allSongs);
  };

  return (
    <>
      <PlayListController
        playListName={playListName}
        next={nextCards}
        prev={prevCards}
        box={boxRef}
        seeAllSongs={seeAllSongs}
      />
      <Box
        component="div"
        sx={{
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
          {filteredSongs?.map((song) => (
            <Song key={song._id} {...song} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Category;
