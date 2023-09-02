import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allSongs: [],
  loading: false,
  error: "",
  successful: false,
};

export const getAllSongs = createAsyncThunk(
  "songs/getAllSongs",
  async (songs, { rejectWithValue }) => {
    try {
      if (songs.length > 0) return songs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const allSongsSlice = createSlice({
  name: "allSongs",
  initialState,
  reducers: {
    setAllSongs: (state, { payload }) => {
      state.allSongs = payload;
    },
  },
  extraReducers: {
    [getAllSongs.pending]: (state) => {
      state.loading = true;
      state.successful = false;
    },
    [getAllSongs.fulfilled]: (state, action) => {
      state.allSongs = action.payload;
      state.loading = false;
      state.successful = true;
    },
    [getAllSongs.rejected]: (state) => {
      state.loading = false;
      state.successful = false;
      state.error = "something went wrong";
    },
  },
});

export const { setAllSongs } = allSongsSlice.actions;
export default allSongsSlice.reducer;
