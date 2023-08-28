import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import { Button, Fab, Stack, Tooltip, Typography } from "@mui/material";
import { RiAmazonLine } from "react-icons/ri";
import HomeIcon from "@mui/icons-material/Home";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import links from "../../../links";
import { useNavigate } from "react-router";
import CustomTheme from "../../CustomTheme";
import SearchComponent from "./components/Search";
import UserAvatar from "./components/UserAvatar";

import "./style.css";

import {
  HEADER_COLORS,
  HEADER_NAVIGATING_BTN_COLORS,
  HEADER_BTN_DISPLAY,
  MENU_COLOR,
} from "../../constants";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (name) => {
    console.log(name);
    navigate(links[name]);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <CustomTheme
      primaryColor={HEADER_COLORS.PRIMARY_COLOR}
      secondaryColor={HEADER_COLORS.PRIMARY_COLOR}
    >
      <AppBar position="fixed" color="secondary">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Box sx={{ width: { xs: "none", sm: "none", md: "10%", lg: "10%" } }}>
            <img
              width="100%"
              src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"
              alt="amazon Music"
            />
          </Box>

          <CustomTheme {...HEADER_NAVIGATING_BTN_COLORS}>
            <Tooltip
              title="Home"
              placement="bottom"
              name="home"
              onClick={() => handleClick("home")}
            >
              <Fab variant="extended" color="primary">
                <HomeIcon sx={{ color: "#FFF", mr: 1 }} fontSize="medium" />
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{ ...HEADER_BTN_DISPLAY }}
                >
                  Home
                </Typography>
              </Fab>
            </Tooltip>

            <Tooltip
              title="Podcast"
              placement="bottom"
              name="podcasts"
              onClick={() => handleClick("podcasts")}
            >
              <Fab variant="extended" color="primary">
                <PodcastsIcon sx={{ color: "#FFF", mr: 1 }} fontSize="medium" />
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{ ...HEADER_BTN_DISPLAY }}
                >
                  Podcast
                </Typography>
              </Fab>
            </Tooltip>
            <Tooltip title="Library" placement="right">
              <Fab variant="extended" color="primary" onClick={handleOpenMenu}>
                <HeadsetMicIcon
                  sx={{ color: "#FFF", mr: 1 }}
                  fontSize="medium"
                />
                <Typography
                  variant="body2"
                  color="#FFF"
                  sx={{ ...HEADER_BTN_DISPLAY }}
                >
                  Library
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
                    onClick={() => handleClick("libraryMusic")}
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
                    onClick={() => handleClick("libraryPodcasts")}
                    sx={{ color: "#FFF" }}
                  >
                    <Typography varian="body1">Podcasts</Typography>
                  </IconButton>
                </MenuItem>
              </Menu>
            </Tooltip>
          </CustomTheme>
          <Box sx={{ flexGrow: 1 }} />
          <SearchComponent />
          <UserAvatar />
        </Toolbar>
      </AppBar>
    </CustomTheme>
  );
};

export default Header;
