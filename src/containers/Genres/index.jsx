import React, { useEffect } from "react";

import { useParams } from "react-router";

import { Stack, Box } from "@mui/material";

import { getSearchedSongs } from "../../App/features/SearchSongs/SearchSongSlice";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../AmazonMusic/components/Loader";
import Category from "../AmazonMusic/components/Category";
import EmptyRecords from "../AmazonMusic/components/EmptyRecords";

const Genres = () => {
  const { filter } = useParams();

  const { loading, searchSongs, filterBy } = useSelector(
    (state) => state.searchSong
  );
  const dispatch = useDispatch();

  let searchObject = JSON.stringify({ [filterBy]: filter });
  console.log("searchobject", searchObject);

  useEffect(() => {
    dispatch(getSearchedSongs(searchObject));
  }, []);

  if (loading) return <Loader />;
  console.log("searchSongs is ", searchSongs);

  if (!searchSongs) return <EmptyRecords msg={filter} />;

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
        <Category
          mood={"happy"}
          songs={searchSongs}
          playListName={"Top Results"}
          key={"happy"}
          isFilter={false}
        />
      </Box>
      <Box flex={1}></Box>
    </Stack>
  );
};

export default Genres;
