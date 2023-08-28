import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "./SignInButton";
import SignoutButton from "./SignoutButton";
import CustomTheme from "../../../CustomTheme";
import { MENU_COLOR } from "../../../constants";

import "../style.css";
import UpdatepasswordButton from "./UpdatepasswordButton";
const UserAvatar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const { isLoggedIn, name } = useSelector((state) => state.user);
  const userFirstLeter = name?.split("")[0] || "";

  const handleOpenMenu = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  return (
    <CustomTheme
      primaryColor={MENU_COLOR.PRIMARY_COLOR}
      secondaryColor={MENU_COLOR.SECONDARY_COLOR}
    >
      <IconButton size="large" onClick={handleOpenMenu} color="inherit">
        {!isLoggedIn && (
          <Avatar>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
        )}
        {isLoggedIn && (
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{userFirstLeter}</Avatar>
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement}
        open={!!anchorElement}
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
        {!isLoggedIn && (
          <MenuItem
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              margin: 0,
              width: 180,
              ":hover": { backgroundColor: "hsl(180, 5%, 8%)" },
            }}
          >
            <SignInButton />
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              margin: 0,
              width: 180,
              ":hover": { backgroundColor: "hsl(180, 5%, 8%)" },
            }}
          >
            <SignoutButton />
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              margin: 0,
              width: 180,
              ":hover": { backgroundColor: "hsl(180, 5%, 8%)" },
            }}
          >
            <UpdatepasswordButton />
          </MenuItem>
        )}
      </Menu>
    </CustomTheme>
  );
};

export default UserAvatar;
