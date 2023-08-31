import React, { useState, useEffect } from "react";
import "./style.css";
import { Box, Divider, IconButton, Stack, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import LINKS from "../links";
import { useNavigate } from "react-router";

import { signup } from "../../App/features/User/registerUserSlice";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../AmazonMusic/components/Loader";
import BackButton from "../Login/BackButton";

import { styles } from "./index.style";

import {
  SIDE_CONTAINER_DISPLAY,
  INITIAL_STATE_SIGN_UP,
  INITIAL_ERROR_DATA_SING_UP,
} from "../AmazonMusic/constants";

import { validateCredentials } from "../../Utils/utils";
function Signup() {
  const [userData, setUserData] = useState(INITIAL_STATE_SIGN_UP);
  const [errorData, setErrorData] = useState(INITIAL_ERROR_DATA_SING_UP);

  const { loading, msgDisplayed } = useSelector(
    (state) => state?.registeredUser
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (msgDisplayed) {
      routeTologin();
    }
  }, [msgDisplayed]);

  const handleChange = (event) => {
    const { name, value } = event?.target;
    setUserData({ ...userData, [name]: value });
  };

  const register = (event) => {
    event.preventDefault();
    setToInitialErrorData();
    const errorResult = validateCredentials(userData);

    if (errorResult) {
      setErrorData((obj) => ({ ...obj, ...errorResult }));
      return;
    } else {
      //dispatch signup action
      //submit userData in Redux
      dispatch(signup({ ...userData, appType: "music" }));
      resetData();
    }
  };

  const routeTologin = () => {
    navigate(LINKS.login);
  };

  const resetData = () => {
    setUserData((obj) => ({ ...obj, ...INITIAL_STATE_SIGN_UP }));
    setToInitialErrorData();
  };

  const setToInitialErrorData = () => {
    setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA_SING_UP }));
  };

  const { name, email, password } = userData;
  const { nameError, emailError, passwordError } = errorData;

  if (loading) return <Loader />;

  return (
    <Stack sx={styles.STACK_STYLE}>
      <Box
        flex={3}
        sx={{
          ...SIDE_CONTAINER_DISPLAY,
          textAlign: "left",
        }}
      >
        <BackButton />
      </Box>
      <Box flex={6}>
        <Box component="div" sx={styles.BACK_BTN_BOX_STYLE}>
          <BackButton />
        </Box>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
        <Box component="div" sx={styles.CONTAINER_STYLE}>
          <h1 className="heading">Sign up</h1>
          <form onSubmit={register}>
            <label htmlFor="name">Name</label>
            <TextField
              type="text"
              id="name"
              name="name"
              fullWidth
              placeholder="Your Name..."
              value={name}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}

            <label htmlFor="email">E-mail</label>
            <TextField
              type="text"
              id="email"
              name="email"
              fullWidth
              placeholder="Your Email..."
              value={email}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

            <label htmlFor="password">Password</label>
            <TextField
              id="password"
              type="password"
              name="password"
              fullWidth
              placeholder="Your Password..."
              value={password}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

            <button className="loginButton" onClick={register}>
              Create your Amazon account
            </button>
          </form>
          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
          <Divider
            light
            variant="fullWidth"
            sx={{
              color: "hsl(0, 0%, 45%)",
            }}
          >
            New to Amazon?
          </Divider>
          <button onClick={routeTologin} className="signupButton">
            Already have an account? Sign in
          </button>
        </Box>
      </Box>
      <Box flex={3} sx={{ ...SIDE_CONTAINER_DISPLAY }}></Box>
    </Stack>
  );
}

export default Signup;
