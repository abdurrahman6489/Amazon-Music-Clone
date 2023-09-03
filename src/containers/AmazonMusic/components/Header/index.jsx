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
import AmazonIcon from "./components/AmazonIcon";
import "./style.css";
import { styles } from "./index.style";

import { HEADER_COLORS, routeBtnLabelArray } from "../../constants";
import LINKS from "../../../links";
import { useNavigate } from "react-router";

const Header = () => {
  const [btnLabelArray, setBtnLabelArray] = useState(routeBtnLabelArray);
  const navigate = useNavigate();
  const headerBtnComponents = {
    Home: HomeButton,
    Library: LibraryButton,
    Podcasts: PodcastButton,
    Search: SearchComponent,
    UserAvatar: UserAvatar,
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
        <Toolbar sx={styles.CONTAINER_STYLE}>
          <Box
            sx={{
              ...styles.IMG_STYLE,
              backgroundImage:
                "url(https://d5fx445wy2wpk.cloudfront.net/static/logo.svg)",
            }}
            onClick={() => navigate(LINKS.home)}
          ></Box>
          <AmazonIcon />
          {btnLabelArray?.map((btn) => {
            const { isActive, label } = btn;
            const key = label;
            const button = headerBtnComponents[label];
            return button
              ? button({ label, changeColor, isActive, key })
              : null;
          })}
        </Toolbar>
      </AppBar>
    </CustomTheme>
  );
};

export default Header;
