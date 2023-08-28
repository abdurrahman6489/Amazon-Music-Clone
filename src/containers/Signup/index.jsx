import React, { useState, useEffect } from "react";
import "./style.css";

import LINKS from "../links";
import { useNavigate } from "react-router";

import { signup } from "../../App/features/User/registerUserSlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../AmazonMusic/components/Loader";
import { SIDE_CONTAINER_DISPLAY } from "../AmazonMusic/constants";
import { Box, Divider, IconButton, Stack, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

const INITIAL_ERROR_DATA = {
  nameError: "",
  emailError: "",
  passwordError: "",
};

function Signup() {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [errorData, setErrorData] = useState(INITIAL_ERROR_DATA);

  const { loading, msgDisplayed } = useSelector(
    (state) => state.registeredUser
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (msgDisplayed) {
      routeTologin();
    }
  }, [msgDisplayed]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const register = (event) => {
    event.preventDefault();
    setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA }));
    console.log("clicked register");
    const errorResult = validation(userData);

    if (errorResult) {
      setErrorData((obj) => ({ ...obj, ...errorResult }));
      return;
    } else {
      //dispatch signup action
      //submit userData in Redux
      console.log(userData);
      dispatch(signup({ ...userData, appType: "music" }));
      setUserData((obj) => ({ ...obj, ...INITIAL_STATE }));
      setErrorData((obj) => ({ ...obj, ...INITIAL_ERROR_DATA }));
    }
  };

  const validation = (userData) => {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      return {
        nameError: "Please enter all fields",
        emailError: "Please enter all fields",
        passwordError: "Please enter all fields",
      };
    }
    let nameError =
      name.length > 3 ? "" : "name must contain atleast 3 letters";
    let emailError =
      email.includes("") && email.split("@")[0].length > 3
        ? ""
        : "Please enter valid email";
    let passwordError =
      password.length > 3 ? "" : "password must contain atleast 3 letters";
    console.log(nameError, emailError, passwordError);

    if (!emailError && !passwordError && !nameError) return false;
    return {
      nameError,
      emailError,
      passwordError,
    };
  };

  const routeTologin = () => {
    navigate(LINKS.login);
  };

  const { name, email, password } = userData;
  const { nameError, emailError, passwordError } = errorData;

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
