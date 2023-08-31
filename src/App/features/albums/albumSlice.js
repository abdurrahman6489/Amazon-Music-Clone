import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config, URLS } from "../../../containers/AmazonMusic/constants";

const initialState = {
  albums: [],
  loading: false,
  error: "",
};

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (thunkAPI) => {
    try {
      const response = await axios.get(URLS.SONG_URL, config);
      const data = response.data.data;
      console.log("albumSlice ", data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: {
    [getAlbums.pending]: (state) => {
      state.loading = true;
    },
    [getAlbums.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.albums = payload;
      state.error = "";
    },
    [getAlbums.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    },
  },
});

export default albumSlice.reducer;
