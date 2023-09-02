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

const PodcastButton = ({ label, changeColor, isActive, key }) => {
  const { pathname } = useLocation();
  const [isActiveColor, setIsActiveColor] = useState(
    () => pathname == LINKS.podcasts
  );
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
          <PodcastsIcon
            color={!isActiveColor ? "#FFF" : "secondary"}
            sx={{ mr: 1 }}
            fontSize="medium"
          />
          <Typography
            variant="body1"
            color={!isActiveColor ? "#FFF" : "secondary"}
            sx={{
              ...HEADER_BTN_DISPLAY,
              fontWeight: 700,
              fontFamily: "HELVETICA ARIAL sans-serif",
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
