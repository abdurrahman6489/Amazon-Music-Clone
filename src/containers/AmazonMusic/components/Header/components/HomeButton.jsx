import React, { useEffect, useState } from "react";

import { Fab, Tooltip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { MdHomeFilled } from "react-icons/md";

import {
  HEADER_NAVIGATING_BTN_COLORS,
  HEADER_BTN_DISPLAY,
} from "../../../constants";
import CustomTheme from "../../../CustomTheme";
import LINKS from "../../../../links";

import { useNavigate, useLocation } from "react-router";

import { styles } from "./homeBtn.style";

const HomeButton = ({ label, changeColor, isActive, key }) => {
  const { pathname } = useLocation();
  const [isActiveColor, setIsActiveColor] = useState(
    () => pathname == LINKS.home
  );

  const activeColor = isActive && isActiveColor ? "secondary" : "#FFF";
  const iconActiveColor =
    isActive && isActiveColor ? "hsl(183, 71%, 50%)" : "#FFF";
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
        <Fab variant="extended" color="primary" size="large">
          <HomeIcon color={activeColor} fontSize="medium" />
          <Typography
            variant="body1"
            color={activeColor}
            sx={{
              ...HEADER_BTN_DISPLAY,
              ...styles.TEXT_STYLE,
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
