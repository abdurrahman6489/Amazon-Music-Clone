import React, { useState, useEffect } from "react";
import "./style.css";

import LINKS from "../links";
import { useNavigate } from "react-router";

import { signup } from "../../App/features/User/registerUserSlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../AmazonMusic/components/Loader";

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
    <div className="login">
      {/* <Link to='/'> */}
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon logo"
      />
      {/* </Link> */}

      <div className="login__container">
        <h1>Signup</h1>

        <form onSubmit={register}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

          <button onClick={register} className="login__signInButton">
            Signup
          </button>
        </form>

        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={routeTologin} className="login__registerButton">
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
}

export default Signup;
