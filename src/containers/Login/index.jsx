import React, { useState, useEffect } from "react";

import "./style.css";
import { Divider, Link } from "@mui/material";
import { useNavigate } from "react-router";
import LINKS from "../links";

import { login } from "../../App/features/User/userSlice";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../AmazonMusic/components/Loader";
import Error from "./Error";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const INITIAL_ERROR_DATA = {
  emailError: "",
  passwordError: "",
};

const INITIAL_UPDATE_PASSWORD = {
  isUpdate: false,
  value: "",
  updatePasswordError: "",
};

function Login() {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [errorData, setErrorData] = useState(INITIAL_ERROR_DATA);
  const [updatePassword, setUpdatePassword] = useState(INITIAL_UPDATE_PASSWORD);

  const { isLoggedIn, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(LINKS.home);
    }
  }, [isLoggedIn]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleChangeUpdatePassword = (event) => {
    let value = event.target.value;
    setUpdatePassword((obj) => ({ ...obj, value }));
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
    } else if (
      !updatePasswordValidation(updatePassword.value, userData.password)
    ) {
      setUpdatePassword((obj) => ({
        ...obj,
        updatePasswordError: "Passwords do not match",
      }));
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

  const updatePasswordValidation = (updatePassword, password) => {
    return updatePassword === password;
  };

  const setUpdate = () => {
    setUpdatePassword((obj) => ({ ...obj, isUpdate: true }));
  };

  const routeToSingup = () => {
    navigate(LINKS.signup);
  };

  const { email, password } = userData;
  const { emailError, passwordError } = errorData;
  const { isUpdate, value, updatePasswordError } = updatePassword;

  if (loading) return <Loader />;

  return (
    <div className="login">
      {error && <Error msg={error} />}
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon logo"
      />
      {/* </Link> */}

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={loginUser}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email..."
            value={email}
            onChange={handleChange}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Your Password..."
            value={password}
            onChange={handleChange}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          {!isUpdate && <Link underline="none" href="" onClick={setUpdate} />}

          {isUpdate && (
            <input
              id="updatePassword"
              type="password"
              name="updatePassword"
              placeholder="Your new Password..."
              value={value}
              onChange={handleChangeUpdatePassword}
            />
          )}
          {isUpdate && updatePasswordError && (
            <p style={{ color: "red" }}>{updatePasswordError}</p>
          )}

          <button
            onClick={!isUpdate ? loginUser : updatePasswordFunction}
            className="login__signInButton"
          >
            Signin
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Divider>New to Amazon?</Divider>
        <button onClick={routeToSingup} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

// "email" : "abdurrahman@gmail.com",
//     "password" : "123456789",
//     "appType" : "music"
