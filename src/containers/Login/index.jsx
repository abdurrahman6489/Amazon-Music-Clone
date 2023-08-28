import React, { useState, useEffect } from "react";

import "./style.css";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";
import LINKS from "../links";

import { login, updatePassword } from "../../App/features/User/userSlice";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../AmazonMusic/components/Loader";
import Error from "./Error";
import { SIDE_CONTAINER_DISPLAY } from "../AmazonMusic/constants";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const INITIAL_ERROR_DATA = {
  emailError: "",
  passwordError: "",
};

const INITIAL_UPDATE_PASSWORD = {
  value: "",
  updatePasswordError: "",
};

function Login() {
  const { isLoggedIn, isPasswordUpdate, loading, error, name } = useSelector(
    (state) => state.user
  );
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [errorData, setErrorData] = useState(INITIAL_ERROR_DATA);
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
    setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA }));
    console.log("clicked login");
    const errorResult = validation(userData);

    if (errorResult) {
      setErrorData((obj) => ({ ...obj, ...errorResult }));
      return;
    } else {
      //dispatch login action
      //submit user data
      dispatch(login({ ...userData, appType: "music" }));
      console.log(userData);
      setUserData((obj) => ({ ...obj, ...INITIAL_STATE }));
      setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA }));
    }
  };

  const updatePasswordFunction = (event) => {
    event.preventDefault();
    setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA }));
    console.log("clicked login");
    const errorResult = validation(userData);

    if (errorResult) {
      setErrorData((obj) => ({ ...obj, ...errorResult }));
      return;
    } else {
      //dispatch login action
      //submit user data
      const submitData = {
        name,
        email: userData.email,
        passwordCurrent: userData.password,
        password: updatePasswordObj.value,
      };
      dispatch(updatePassword({ ...submitData, appType: "music" }));
      console.log(submitData);
      setUserData((obj) => ({ ...obj, ...INITIAL_STATE }));
      setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA }));
    }
  };

  const validation = (userData) => {
    const { email, password } = userData;

    if (!email || !password) {
      return {
        emailError: "Please enter all fields",
        passwordError: "Please enter all fields",
      };
    }
    let emailError =
      email.length > 3 && email.includes("") ? "" : "Please enter valid email";
    let passwordError =
      password.length > 3 ? "" : "password must contain atleast 3 letters";
    console.log(emailError, passwordError);

    if (!emailError && !passwordError) return false;
    return {
      emailError,
      passwordError,
    };
  };

  const routeToSingup = () => {
    navigate(LINKS.signup);
  };

  const { email, password } = userData;
  const { emailError, passwordError } = errorData;
  const { value, updatePasswordError } = updatePasswordObj;

  if (loading) return <Loader />;

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "rgba(255, 255, 255)",
        color: "hsl(0, 0%, 4%)",
        width: "100dvw",
      }}
    >
      <Box
        flex={3}
        sx={{
          ...SIDE_CONTAINER_DISPLAY,
          textAlign: "left",
        }}
      >
        <IconButton sx={{ mt: 3, ml: 5 }}>
          <ArrowBackIosNewIcon fontSize="small" color="primary" />
        </IconButton>
      </Box>
      <Box flex={6}>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
        {error && <Error msg={error} />}
        <Box
          component="div"
          sx={{
            width: { xs: "80%", sm: "65%", md: "60%", lg: "50%" },
            border: "1px solid #ddd",
            borderRadius: "0.5rem",
            backgroundColor: "#fff",
            padding: "1rem",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
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

// "email" : "abdurrahman@gmail.com",
//     "password" : "123456789",
//     "appType" : "music"

// {
//   "name" : "Abdul Rahman",
//   "email" : "abdurrahman@gmail.com",
//   "passwordCurrent" : "123456788",
//   "password" : "123456789",
//   "appType" : "music"
// }
