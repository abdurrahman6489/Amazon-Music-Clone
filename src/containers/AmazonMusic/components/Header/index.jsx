import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import CustomTheme from "../../CustomTheme";
import SearchComponent from "./components/Search";
import UserAvatar from "./components/UserAvatar";
import HomeButton from "./components/HomeButton";
import LibraryButton from "./components/LibraryButton";
import PodcastButton from "./components/PodcastButton";
import "./style.css";

import { HEADER_COLORS, routeBtnLabelArray } from "../../constants";

const Header = () => {
  const [btnLabelArray, setBtnLabelArray] = useState(routeBtnLabelArray);

  const headerBtnComponents = {
    Home: HomeButton,
    Library: LibraryButton,
    Podcasts: PodcastButton,
  };

  function changeColor(label) {
    const updatedArray = btnLabelArray.map((btn) =>
      btn.label === label
        ? { ...btn, isActive: true }
        : { ...btn, isActive: false }
    );
    setBtnLabelArray(updatedArray);
  }

  return (
    <CustomTheme {...HEADER_COLORS}>
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
          <Box
            sx={{
              width: { xs: 250, sm: 250, md: 300, lg: 350 },
              height: 30,
              backgroundImage:
                "url(https://d5fx445wy2wpk.cloudfront.net/static/logo.svg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          {btnLabelArray?.map((btn) => {
            const { isActive, label } = btn;
            const key = label;
            const button = headerBtnComponents[label];
            return button
              ? button({ label, changeColor, isActive, key })
              : null;
          })}

          <SearchComponent />
          <UserAvatar />
        </Toolbar>
      </AppBar>
    </CustomTheme>
  );
};

export default Header;
