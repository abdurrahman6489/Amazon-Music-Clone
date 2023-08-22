import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URL, config } from "../../../containers/AmazonMusic/constants";

const initialState = {
  searchSongs: [],
  loading: false,
  filterBy: "title",
};

export const getSearchedSongs = createAsyncThunk(
  "searchSongs/getSearchedSongs",
  async (filter, thunkAPI) => {
    try {
      const response = await axios.get(`${SEARCH_URL}${filter}`, config);
      const data = response.data.data;
      const status = response.data.status;
      console.log(data);
      if (status === "fail") return [];
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchSongsSlice = createSlice({
  name: "searchSong",
  initialState,
  reducers: {
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: {
    [getSearchedSongs.pending]: (state) => {
      state.loading = true;
    },
    [getSearchedSongs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.searchSongs = payload;
    },
    [getSearchedSongs.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const { setFilterBy } = searchSongsSlice.actions;
export default searchSongsSlice.reducer;
