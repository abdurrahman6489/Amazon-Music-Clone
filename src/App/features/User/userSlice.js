import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  SIGN_IN_AUTH_URL,
  config,
} from "../../../containers/AmazonMusic/constants";

const initialState = {
  name: "",
  email: "",
  loading: false,
  isLoggedIn: false,
  token: "",
  savedAlbums: [],
  savedSongs: [],
  error: "",
};

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(SIGN_IN_AUTH_URL, credentials, config);
      const token = response.data.token;
      const data = response.data.data;
      console.log("from userSlice data is ", data, "token is ", token);
      return { token, data };
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.error = "";
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
