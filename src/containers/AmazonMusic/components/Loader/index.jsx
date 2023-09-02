import React from "react";
import "./style.css";
import { Box } from "@mui/material";
const Loader = () => {
  return (
    <Box component="div" sx={{ margin: "2rem" }}>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default Loader;
