import React, { useEffect } from "react";
import Category from "../Category";

import { useSelector } from "react-redux";
import { Stack, Box } from "@mui/material";
import Loader from "../Loader";
import { categoryArray } from "../../constants";
import Error from "../../../Login/Error";
import { styles } from "./index.style";
const Body = () => {
  const { loading, albums, error } = useSelector((state) => state.albums);
  const isLoading = useSelector((state) => state.allSongs.loading);

  const hasError = useSelector((state) => state.allSongs.error);

  if (loading || isLoading) return <Loader />;
  if (error || hasError) return <Error msg={error} />;

  return (
    <Box sx={styles.BOX_STYLE}>
      {categoryArray?.map((category) => {
        const { mood, playListName, isFilter } = category;
        return (
          <Category
            mood={mood}
            songs={albums}
            playListName={playListName}
            key={mood}
            isFilter={isFilter}
          />
        );
      })}
    </Box>
  );
};

export default Body;
