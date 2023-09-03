import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";

import { useNavigate } from "react-router";
import LINKS from "../links";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton sx={{ mt: 3, ml: 5 }} onClick={() => navigate(LINKS.home)}>
      <ArrowBackIosNewIcon fontSize="small" color="primary" />
    </IconButton>
  );
};

export default BackButton;
