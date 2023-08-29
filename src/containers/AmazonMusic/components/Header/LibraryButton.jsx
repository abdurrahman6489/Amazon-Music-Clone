import React, { useState } from "react";

import { Fab, Tooltip, Typography } from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { HEADER_NAVIGATING_BTN_COLORS } from "../../../constants";
import CustomTheme from "../../../CustomTheme";
import LINKS from "../../../../links";

import { useNavigate } from "react-router";

const LibraryButton = ({ label, changeColor, isActive }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    changeColor(label);
  };

  const handleRoute = (routeName) => {
    navigate(LINKS[routeName]);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <CustomTheme {...HEADER_NAVIGATING_BTN_COLORS}>
      <Tooltip title="Home" placement="right" name="home">
        <Fab
          variant="extended"
          color="primary"
          sx={{ p: 2, ml: 3 }}
          onClick={handleClick}
        >
          <HeadsetMicIcon sx={{ color: "#FFF", mr: 1 }} fontSize="medium" />
          <Typography
            variant="body2"
            color="#FFF"
            sx={{ ...HEADER_BTN_DISPLAY }}
          >
            {label}
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ color: "#FFF", ml: 1 }}
            fontSize="medium"
          />
        </Fab>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            key={"music"}
            color="primary"
            divider="true"
            sx={{
              backgroundColor: "#0a0b0b",
              ":hover": { backgroundColor: "hsl(180, 5%, 8%)" },
            }}
          >
            <IconButton
              onClick={() => handleClick(LINKS.libraryMusic)}
              sx={{ color: "#FFF" }}
            >
              <Typography varian="body1">Music</Typography>
            </IconButton>
          </MenuItem>
          <MenuItem
            key={"Podcasts"}
            sx={{
              backgroundColor: "#0a0b0b",
              ":hover": { backgroundColor: "hsl(180, 5%, 8%)" },
            }}
          >
            <IconButton
              onClick={() => handleRoute(LINKS.libraryPodcasts)}
              sx={{ color: "#FFF" }}
            >
              <Typography varian="body1">Podcasts</Typography>
            </IconButton>
          </MenuItem>
        </Menu>
      </Tooltip>
    </CustomTheme>
  );
};

export default LibraryButton;
