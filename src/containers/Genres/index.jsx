import React, { useEffect } from "react";

import { useParams } from "react-router";

import { Box } from "@mui/material";

import { getSearchedSongs } from "../../App/features/SearchSongs/SearchSongSlice";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../AmazonMusic/components/Loader";
import Category from "../AmazonMusic/components/Category";
import EmptyRecords from "../AmazonMusic/components/EmptyRecords";

import { styles } from "./index.style";

const Genres = () => {
  const { filter } = useParams();

  const { loading, searchSongs, filterBy, error } = useSelector(
    (state) => state?.searchSong
  );
  const dispatch = useDispatch();

  let searchObject = JSON.stringify({ [filterBy]: filter });

  useEffect(() => {
    dispatch(getSearchedSongs(searchObject));
  }, []);

  if (loading) return <Loader />;

  if (error) return <EmptyRecords msg={filter} />;

  return (
    <Box sx={styles.BOX_STYLE}>
      <Category
        mood={"happy"}
        songs={searchSongs}
        playListName={"Top Results"}
        key={"happy"}
        isFilter={false}
      />
    </Box>
  );
};

export default Genres;
