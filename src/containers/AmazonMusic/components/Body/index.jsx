import React, { useEffect } from "react";
import Category from "../Category";

import { useSelector } from "react-redux";
import { Stack, Box } from "@mui/material";
import Loader from "../Loader";
import { categoryArray } from "../../constants";
import Error from "../../../Login/Error";
import { useNavigate } from "react-router";
import LINKS from "../../../links";
const Body = () => {
  const { loading, albums, error } = useSelector((state) => state.albums);
  const isLoading = useSelector((state) => state.allSongs.loading);
  const successful = useSelector((state) => state.allSongs.successful);
  const hasError = useSelector((state) => state.allSongs.error);

  const navigate = useNavigate();
  if (loading || isLoading) return <Loader />;
  if (error || hasError) return <Error msg={error} />;

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
      <Box flex={1}></Box>
    </Stack>
  );
};

export default Body;
