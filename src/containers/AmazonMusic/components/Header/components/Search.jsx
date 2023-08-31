import { Box } from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import LINKS from "../../../../links";

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
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
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
      width: "20ch",
    },
  },
}));
const SearchComponent = ({ label, changeColor, isActive, key }) => {
  const [searchParams, setSearchParams] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("search clicked");
    changeColor(label);
    navigate(LINKS.search);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchParams(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`${LINKS.genres}/${searchParams}`);
    setSearchParams("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Search onClick={() => handleClick()}>
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
          onChange={handleChange}
        />
      </Search>
    </form>
  );
};

export default SearchComponent;
