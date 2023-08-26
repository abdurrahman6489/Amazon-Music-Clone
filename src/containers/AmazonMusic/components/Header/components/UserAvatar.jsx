import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem, IconButton } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import SignInButton from "./SignInButton";
import SignoutButton from "./SignoutButton";
const UserAvatar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state) => state.user);
  const userFirstLeter = name?.split("")[0] || "";

  const handleOpenMenu = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  return (
    <>
      <IconButton size="large" onClick={handleOpenMenu}>
        {!isLoggedIn && (
          <Avatar>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
        )}
        {isLoggedIn && <Avatar>{userFirstLeter}</Avatar>}
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
          <MenuItem>
            <SignInButton />
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem>
            <SignoutButton />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default UserAvatar;
