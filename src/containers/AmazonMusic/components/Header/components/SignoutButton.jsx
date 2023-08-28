import React from "react";
import { Fab, IconButton, Typography } from "@mui/material";
import LINKS from "../../../../links";
import { useNavigate } from "react-router";
import CustomTheme from "../../../CustomTheme";
import { SIGN_IN_SIGN_OUT_BTN_COLOR } from "../../../constants";

import { signOutUser } from "../../../../../App/features/User/userSlice";
import { useDispatch } from "react-redux";
const SignoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signOutUser());
    navigate(LINKS.home);
  };
  return (
    <CustomTheme {...SIGN_IN_SIGN_OUT_BTN_COLOR}>
      <IconButton
        onClick={handleClick}
        variant="extended"
        color="primary"
        sx={{ width: 100 }}
        key="signout"
      >
        <Typography variant="button" color="secondary">
          Sign out
        </Typography>
      </IconButton>
    </CustomTheme>
  );
};

export default SignoutButton;
