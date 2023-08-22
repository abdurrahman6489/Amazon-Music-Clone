import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config, SONG_URL } from "../../../containers/AmazonMusic/constants";

const initialState = {
  albums: [],
  loading: false,
};

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (thunkAPI) => {
    try {
      const response = await axios.get(SONG_URL, config);
      const data = response.data.data;
      console.log("albumSlice ", data);
      return data;
    } catch (error) {
      console.log(error);
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
    },
    [getAlbums.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default albumSlice.reducer;
