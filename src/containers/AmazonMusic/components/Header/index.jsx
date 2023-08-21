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

const PRIMARY_COLOUR = "#0a0b0b";
const SECONDARY_COLOUR = "#0a0b0b";

const BTN_PRIMARY_COLOR = "hsl(0, 0%, 10%)";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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
    <CustomTheme primaryColor={PRIMARY_COLOUR} secondaryColor={PRIMARY_COLOUR}>
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

          <CustomTheme primaryColor={BTN_PRIMARY_COLOR} secondaryColor="#333">
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
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
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
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
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
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
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
                  sx={{ color: "hsl(0, 0%, 10%)" }}
                >
                  <IconButton onClick={() => handleClick("libraryMusic")}>
                    <Typography varian="body1">Music</Typography>
                  </IconButton>
                </MenuItem>
                <MenuItem key={"Podcasts"}>
                  <IconButton onClick={() => handleClick("libraryPodcasts")}>
                    <Typography varian="body1">Podcasts</Typography>
                  </IconButton>
                </MenuItem>
              </Menu>
            </Tooltip>
          </CustomTheme>
          <Box sx={{ flexGrow: 1 }} />
          <SearchComponent />
          <Avatar>R</Avatar>
        </Toolbar>
      </AppBar>
    </CustomTheme>
  );
};

export default Header;
