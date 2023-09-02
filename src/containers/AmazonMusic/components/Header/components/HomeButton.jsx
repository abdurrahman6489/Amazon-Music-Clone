import React, { useEffect, useState } from "react";

import { Fab, Tooltip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import {
  HEADER_NAVIGATING_BTN_COLORS,
  HEADER_BTN_DISPLAY,
} from "../../../constants";
import CustomTheme from "../../../CustomTheme";
import LINKS from "../../../../links";

import { useNavigate, useLocation } from "react-router";

const HomeButton = ({ label, changeColor, isActive, key }) => {
  const { pathname } = useLocation();
  const [isActiveColor, setIsActiveColor] = useState(
    () => pathname == LINKS.home
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(LINKS.home);
    changeColor(label);
  };

  useEffect(() => {
    setIsActiveColor((prevValue) => pathname == LINKS.home);
  }, [pathname]);

  return (
    <CustomTheme {...HEADER_NAVIGATING_BTN_COLORS}>
      <Tooltip
        title="Home"
        placement="bottom"
        name="home"
        onClick={handleClick}
      >
        <Fab
          variant="extended"
          color="primary"
          sx={{ p: 2, ml: 3 }}
          size="large"
        >
          <HomeIcon
            color={!isActiveColor ? "#FFF" : "secondary"}
            fontSize="large"
            sx={{
              mr: 1,
              ":hover": {
                color: HEADER_NAVIGATING_BTN_COLORS.secondaryColor,
              },
            }}
          />
          <Typography
            variant="body1"
            color={!isActiveColor ? "#FFF" : "secondary"}
            sx={{
              ...HEADER_BTN_DISPLAY,
              fontWeight: 700,
              fontFamily: "HELVETICA ARIAL sans-serif",
              ":hover": {
                bgcolor: "secondary",
              },
            }}
          >
            {label}
          </Typography>
        </Fab>
      </Tooltip>
    </CustomTheme>
  );
};

export default HomeButton;
