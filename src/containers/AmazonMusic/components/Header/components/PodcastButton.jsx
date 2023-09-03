import React, { useState, useEffect } from "react";

import { Fab, Tooltip, Typography } from "@mui/material";
import PodcastsIcon from "@mui/icons-material/Podcasts";

import {
  HEADER_NAVIGATING_BTN_COLORS,
  HEADER_BTN_DISPLAY,
} from "../../../constants";
import CustomTheme from "../../../CustomTheme";
import LINKS from "../../../../links";

import { useLocation, useNavigate } from "react-router";

import { styles } from "./homeBtn.style";

const PodcastButton = ({ label, changeColor, isActive, key }) => {
  const { pathname } = useLocation();
  const [isActiveColor, setIsActiveColor] = useState(
    () => pathname == LINKS.podcasts
  );
  const activeColor = isActive && isActiveColor ? "secondary" : "#FFF";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(LINKS.podcasts);
    changeColor(label);
  };

  useEffect(() => {
    setIsActiveColor((prevValue) => pathname == LINKS.podcasts);
  }, [pathname]);

  return (
    <CustomTheme {...HEADER_NAVIGATING_BTN_COLORS}>
      <Tooltip
        title="Podcasts"
        placement="bottom"
        name="Podcasts"
        onClick={handleClick}
      >
        <Fab variant="extended" color="primary" sx={{ p: 2, ml: 3 }}>
          <PodcastsIcon color={activeColor} fontSize="medium" />
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

export default PodcastButton;
