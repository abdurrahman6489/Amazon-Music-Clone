import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem, IconButton, Fab, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "./SignInButton";
import SignoutButton from "./SignoutButton";
import UpdatepasswordButton from "./UpdatepasswordButton";
import SearchForSmallScreen from "./SearchForSmallScreen";
import CustomTheme from "../../../CustomTheme";
import { MENU_COLOR, USER_AVATAR_COLOR } from "../../../constants";

import "../style.css";
import { styles } from "./userAvatar.style";

const UserAvatar = ({ label, changeColor, isActive, key }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const { isLoggedIn, name } = useSelector((state) => state.user);
  const userFirstName = name?.split(" ")[0] || "";

  const handleOpenMenu = (event) => {
    setAnchorElement(event.currentTarget);
    changeColor(label);
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  return (
    <CustomTheme {...MENU_COLOR}>
      <CustomTheme {...USER_AVATAR_COLOR}>
        <Fab
          size="large"
          onClick={handleOpenMenu}
          variant="extended"
          color="secondary"
          sx={{ transform: "scale(1.1)" }}
        >
          <Typography variant="body2" color="primary">
            {isLoggedIn ? userFirstName : "Login"}
          </Typography>
          <KeyboardArrowDownIcon
            color={"primary"}
            fontSize="small"
            sx={styles.KEYBOARD_ICON_STYLE}
          />
        </Fab>
      </CustomTheme>

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
        <MenuItem sx={{ ...styles.MENUITEM_STYLE, ...styles.MENUITEM_DISPLAY }}>
          <SearchForSmallScreen changeColor={changeColor} label={label} />
        </MenuItem>
        {!isLoggedIn && (
          <MenuItem sx={styles.MENUITEM_STYLE}>
            <SignInButton />
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem sx={styles.MENUITEM_STYLE}>
            <SignoutButton />
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem sx={styles.MENUITEM_STYLE}>
            <UpdatepasswordButton />
          </MenuItem>
        )}
      </Menu>
    </CustomTheme>
  );
};

export default UserAvatar;
