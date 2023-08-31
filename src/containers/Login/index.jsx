import React, { useState, useEffect } from "react";

import "./style.css";
import { Box, Divider, Stack, TextField } from "@mui/material";
import { styles } from "./index.style";
import { useNavigate } from "react-router";
import LINKS from "../links";

import { login, updatePassword } from "../../App/features/User/userSlice";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../AmazonMusic/components/Loader";
import Error from "./Error";
import BackButton from "./BackButton";
import {
  SIDE_CONTAINER_DISPLAY,
  INITIAL_STATE_LOG_IN,
  INITIAL_ERROR_DATA_LOG_IN,
  INITIAL_UPDATE_PASSWORD,
} from "../AmazonMusic/constants";

import {
  passwordValidation,
  emailPasswordValidation as validation,
} from "../../Utils/utils";

function Login() {
  const { isLoggedIn, isPasswordUpdate, loading, error, name } = useSelector(
    (state) => state?.user
  );
  const [userData, setUserData] = useState(INITIAL_STATE_LOG_IN);
  const [errorData, setErrorData] = useState(INITIAL_ERROR_DATA_LOG_IN);
  const [updatePasswordObj, setUpdatePasswordObj] = useState(
    INITIAL_UPDATE_PASSWORD
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && !isPasswordUpdate) {
      navigate(LINKS.home);
    }
  }, [isLoggedIn, isPasswordUpdate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleChangeUpdatePassword = (event) => {
    let value = event.target.value;
    setUpdatePasswordObj((obj) => ({ ...obj, value }));
  };

  const loginUser = (event) => {
    event.preventDefault();
    setToInitialErrorData();
    const errorResult = validation(userData);

    if (errorResult) {
      setErrorData((obj) => ({ ...obj, ...errorResult }));
      return;
    } else {
      //dispatch login action
      //submit user data
      dispatch(login({ ...userData, appType: "music" }));
      resetData();
    }
  };

  const updatePasswordFunction = (event) => {
    event.preventDefault();
    setToInitialErrorData();
    const errorResult = validation(userData);
    const updatePasswordValidation = passwordValidation(
      updatePasswordObj.value
    );

    if (errorResult) {
      setErrorData((obj) => ({ ...obj, ...errorResult }));
      return;
    } else if (updatePasswordValidation) {
      setUpdatePasswordObj((obj) => ({
        ...obj,
        updatePasswordError: updatePasswordValidation,
      }));
    } else {
      //dispatch login action
      //submit user data
      const submitData = {
        name,
        email: userData?.email,
        passwordCurrent: userData?.password,
        password: updatePasswordObj?.value,
      };
      dispatch(updatePassword({ ...submitData, appType: "music" }));
      resetData();
    }
  };

  const routeToSingup = () => {
    navigate(LINKS.signup);
  };

  const resetData = () => {
    setUserData((obj) => ({ ...obj, ...INITIAL_STATE_LOG_IN }));
    setToInitialErrorData();
  };

  const setToInitialErrorData = () => {
    setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA_LOG_IN }));
  };

  const { email, password } = userData;
  const { emailError, passwordError } = errorData;
  const { value, updatePasswordError } = updatePasswordObj;

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
        {error && <Error msg={error} />}
        <Box component="div" sx={styles.CONTAINER_STYLE}>
          <h1 className="heading">Sign in</h1>
          <form onSubmit={loginUser}>
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

            {isPasswordUpdate && (
              <label htmlFor="updatePassword">New Password</label>
            )}
            {isPasswordUpdate && (
              <TextField
                id="updatePassword"
                type="password"
                name="updatePassword"
                placeholder="Your new Password..."
                fullWidth
                value={value}
                onChange={handleChangeUpdatePassword}
                sx={{ mb: 3 }}
              />
            )}
            {isPasswordUpdate && updatePasswordError && (
              <p style={{ color: "red" }}>{updatePasswordError}</p>
            )}

            <button
              className="loginButton"
              onClick={!isPasswordUpdate ? loginUser : updatePasswordFunction}
            >
              {!isPasswordUpdate ? "Sign in" : "Update Password"}
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
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
          <button onClick={routeToSingup} className="signupButton">
            Create your Amazon Account
          </button>
        </Box>
      </Box>
      <Box flex={3} sx={{ ...SIDE_CONTAINER_DISPLAY }}></Box>
    </Stack>
  );
}

export default Login;
