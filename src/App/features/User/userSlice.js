import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  SIGN_IN_AUTH_URL,
  UPDATE_PASSWORD_URL,
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

export const updatePasswordRedux = createAsyncThunk(
  "user/updatePasswordRedux",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        UPDATE_PASSWORD_URL,
        credentials,
        config
      );
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
  reducers: {
    updateSavedUserDetails: (state, action) => {
      const { name, email, token, isLoggedIn } = action.payload;
      state.name = name;
      state.email = email;
      state.token = token;
      state.isLoggedIn = isLoggedIn;
    },
    updateSavedAlbums: (state, action) => {
      const { savedAlbums } = action.payload;
      state.savedAlbums = savedAlbums;
    },
    updateSavedSongs: (state, action) => {
      const { savedSongs } = action.payload;
      state.savedSongs = savedSongs;
    },
    addAlbums: (state, action) => {
      const { albums } = action.payload;
      state.savedAlbums.push(albums);
    },
    addRemoveSongs: (state, action) => {
      const { song } = action.payload;
      const id = song._id;
      const songFoundIndex = state.savedSongs.findIndex(
        (song) => song._id == id
      );
      console.log(id);
      if (songFoundIndex === -1) state.savedSongs.push(song);
      else state.savedSongs.splice(songFoundIndex, 1);
    },
  },
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
export const {
  updateSavedUserDetails,
  updateSavedAlbums,
  updateSavedSongs,
  addAlbums,
  addRemoveSongs,
} = userSlice.actions;
export default userSlice.reducer;
