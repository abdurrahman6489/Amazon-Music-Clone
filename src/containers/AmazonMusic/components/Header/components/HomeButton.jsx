import React from "react";

import { Fab, Tooltip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { HEADER_NAVIGATING_BTN_COLORS } from "../../../constants";
import CustomTheme from "../../../CustomTheme";
import LINKS from "../../../../links";

import { useNavigate } from "react-router";

const HomeButton = ({ label, changeColor, isActive }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(LINKS.home);
    changeColor(label);
  };

  return (
    <CustomTheme {...HEADER_NAVIGATING_BTN_COLORS}>
      <Tooltip
        title="Home"
        placement="bottom"
        name="home"
        onClick={handleClick}
      >
        <Fab variant="extended" color="primary" sx={{ p: 2, ml: 3 }}>
          <HomeIcon sx={{ color: "#FFF", mr: 1 }} fontSize="medium" />
          <Typography
            variant="body2"
            color="#FFF"
            sx={{ ...HEADER_BTN_DISPLAY }}
          >
            {label}
          </Typography>
        </Fab>
      </Tooltip>
    </CustomTheme>
  );
};

export default HomeButton;
