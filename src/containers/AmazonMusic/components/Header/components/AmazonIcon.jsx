import React from "react";
import { AiFillAmazonCircle } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { styles } from "./amazonIcon.style";
import { useNavigate } from "react-router";
import LINKS from "../../../../links";
const AmazonIcon = () => {
  const navigate = useNavigate();
  return (
    <IconButton sx={styles.ICON_BTN_STYLE} onClick={() => navigate(LINKS.home)}>
      <AiFillAmazonCircle color="white" size={25} />
    </IconButton>
  );
};

export default AmazonIcon;
