import React, { useState, useEffect, useRef } from "react";
import Category from "../Category";
import PlayListController from "./PlaylistController";
import axios from "axios";
import { useSelector } from "react-redux";
import { Stack, Box } from "@mui/material";
import Loader from "../Loader";

const Body = () => {
  const { loading } = useSelector((state) => state.albums);
  if (loading) return <Loader />;
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mt: "1vh",
        mb: "8vh",
        // border: "1px solid white",
      }}
    >
      <Box flex={1}></Box>
      <Box
        flex={50}
        sx={{ border: "1px solid black", maxWidth: "92dvw", p: 5 }}
      >
        {/* <Loader /> */}
        <Category mood="happy" />
        <Category mood="sad" />
        <Category mood="excited" />
        <Category mood="romantic" />
      </Box>
      <Box flex={1}></Box>
    </Stack>
  );
};

export default Body;
