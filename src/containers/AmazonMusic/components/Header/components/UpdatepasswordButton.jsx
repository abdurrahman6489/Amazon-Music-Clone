import React from "react";
import { Fab, IconButton, Typography } from "@mui/material";
import LINKS from "../../../../links";
import { useNavigate } from "react-router";
import CustomTheme from "../../../CustomTheme";
import { SIGN_IN_SIGN_OUT_BTN_COLOR } from "../../../constants";

import { setPasswordUpdateTrue } from "../../../../../App/features/User/userSlice";
import { useDispatch } from "react-redux";
const UpdatepasswordButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPasswordUpdateTrue());
    navigate(LINKS.login);
  };
  return (
    <CustomTheme {...SIGN_IN_SIGN_OUT_BTN_COLOR}>
      <IconButton
        onClick={handleClick}
        variant="extended"
        color="primary"
        sx={{ margin: "auto" }}
        key="signout"
      >
        <Typography variant="button" color="secondary">
          Update Password
        </Typography>
      </IconButton>
    </CustomTheme>
  );
};

export default UpdatepasswordButton;
