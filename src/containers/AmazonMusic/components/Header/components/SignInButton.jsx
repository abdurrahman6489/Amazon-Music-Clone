import React from "react";
import { Fab, Typography } from "@mui/material";
import LINKS from "../../../../links";
import { useNavigate } from "react-router";
import CustomTheme from "../../../CustomTheme";
import { SIGN_IN_SIGN_OUT_BTN_COLOR } from "../../../constants";
const SignInButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("clicked sign in button");
    navigate(LINKS.login);
  };
  return (
    <CustomTheme {...SIGN_IN_SIGN_OUT_BTN_COLOR}>
      <Fab
        onClick={handleClick}
        variant="extended"
        color="primary"
        sx={{ width: 100 }}
        key="signin"
      >
        <Typography variant="button" color="secondary">
          Sign In
        </Typography>
      </Fab>
    </CustomTheme>
  );
};

export default SignInButton;
