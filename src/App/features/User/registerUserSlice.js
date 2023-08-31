import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config, URLS } from "../../../containers/AmazonMusic/constants";

const initialState = {
  token: "",
  isRegistered: false,
  loading: false,
  error: "",
  msgDisplayed: false,
  message: "",
};

export const signup = createAsyncThunk(
  "registerUser/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        URLS.SIGN_UP_AUTH_URL,
        credentials,
        config
      );
      const token = response.data.token;
      const data = response.data.data;
      console.log(
        "from registeredUserSlice data is ",
        data,
        "token is ",
        token
      );
      return { token, data };
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registeredUserSlice = createSlice({
  name: "registeredUser",
  initialState,
  reducers: {
    setMsgDisplayedFalse: (state) => {
      state.msgDisplayed = false;
      state.message = "";
    },
  },
  extraReducers: {
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.isRegistered = true;
      state.token = action.payload.token;
      state.message = "You are successfully registered";
      state.msgDisplayed = true;
    },
    [signup.rejected]: (state, { payload }) => {
      state.isRegistered = false;
      state.msgDisplayed = true;
      state.loading = false;
      state.error = payload;
      state.message = payload;
    },
  },
});
export const { setMsgDisplayedFalse } = registeredUserSlice.actions;
export default registeredUserSlice.reducer;
// {
//     "name" : "Abdul Rahman",
//     "email" : "abdurrahman@gmail.com",
//     "password" : "123456789",
//     "appType" : "music"
// }
