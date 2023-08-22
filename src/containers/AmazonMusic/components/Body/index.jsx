import React from "react";
import Category from "../Category";

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
      }}
    >
      <Box flex={1}></Box>
      <Box
        flex={50}
        sx={{ border: "1px solid black", maxWidth: "92dvw", p: 5 }}
      >
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
