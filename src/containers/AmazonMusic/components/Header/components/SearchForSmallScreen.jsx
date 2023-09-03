import React, { useState } from "react";
import { Box, Fab, TextField } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import CustomTheme from "../../../CustomTheme";
import { USER_AVATAR_COLOR } from "../../../constants";
import { useNavigate } from "react-router";
import LINKS from "../../../../links";
import { filterByObj } from "../../../constants";
import { setFilterBy } from "../../../../../App/features/SearchSongs/SearchSongSlice";
import { useDispatch } from "react-redux";
import { styles } from "./search.style";
const SearchForSmallScreen = ({ changeColor, label }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [searchParamsSmallScreen, setSearchParamsSmallScreen] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick_SmallScreen = () => {
    changeColor(label);
    navigate(LINKS.search);
  };

  const handleChange_SmallScreen = (event) => {
    setSearchParamsSmallScreen(event.target.value);
  };

  const handleSubmit_Smallcreen = (event) => {
    event.preventDefault();
    dispatch(setFilterBy(filterByObj.title));
    navigate(`${LINKS.genres}/${searchParamsSmallScreen}`);
    setSearchParamsSmallScreen("");
    handleCloseMenu();
  };

  const handleOpenMenu = (event) => {
    setAnchorElement(event.currentTarget);
    handleClick_SmallScreen();
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  return (
    <Box component="div" sx={styles.SEARCH_BTN_STYLE} key="small">
      <CustomTheme {...USER_AVATAR_COLOR}>
        <Fab
          size="medium"
          color="secondary"
          variant="extended"
          sx={styles.SEARCH_BTN_STYLE}
          onClick={handleOpenMenu}
        >
          <SearchIcon
            color="primary"
            fontSize="medium"
            sx={styles.SEARCH_ICON_STYLE}
          />
        </Fab>
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
          <MenuItem>
            <form onSubmit={handleSubmit_Smallcreen}>
              <TextField
                placeholder="Search…"
                value={searchParamsSmallScreen}
                onChange={handleChange_SmallScreen}
                color="secondary"
              />
            </form>
          </MenuItem>
        </Menu>
      </CustomTheme>
    </Box>
  );
};

export default SearchForSmallScreen;
