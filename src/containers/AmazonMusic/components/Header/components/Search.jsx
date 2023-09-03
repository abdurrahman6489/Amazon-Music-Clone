import { Box, Fab, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";
import LINKS from "../../../../links";
import { filterByObj } from "../../../constants";
import { setFilterBy } from "../../../../../App/features/SearchSongs/SearchSongSlice";
import { useDispatch } from "react-redux";
import CustomTheme from "../../../CustomTheme";
import { USER_AVATAR_COLOR } from "../../../constants";
import { styles } from "./search.style";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 10,
  backgroundColor: alpha(theme.palette.common.white, 1),
  color: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
    color: alpha(theme.palette.common.white, 0.2),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "85%",
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    color: alpha(theme.palette.common.black, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&:hover": {
      color: alpha(theme.palette.common.black, 0.95),
    },
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));
const SearchComponent = ({ label, changeColor, isActive, key }) => {
  const [searchParams, setSearchParams] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick_LargeScreen = () => {
    changeColor(label);
    navigate(LINKS.search);
  };

  const handleChange_LargeScreen = (event) => {
    setSearchParams(event.target.value);
  };

  const handleSubmit_Largescreen = (event) => {
    event.preventDefault();
    dispatch(setFilterBy(filterByObj.title));
    navigate(`${LINKS.genres}/${searchParams}`);
    setSearchParams("");
  };

  return (
    <>
      <Box component="div" sx={styles.SEARCH_BAR_STYLE} key="large">
        <form onSubmit={handleSubmit_Largescreen}>
          <Search
            onClick={() => handleClick_LargeScreen()}
            sx={styles.SEARCH_BAR_STYLE}
          >
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: "hsl(0, 0%, 25%)",
                  ":hover": { color: "hsl(0, 0%, 20%)" },
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchParams}
              onChange={handleChange_LargeScreen}
            />
          </Search>
        </form>
      </Box>
    </>
  );
};

export default SearchComponent;
