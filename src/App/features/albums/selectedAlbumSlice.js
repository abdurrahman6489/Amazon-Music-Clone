import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../containers/AmazonMusic/constants";
import { ALBUM_URL } from "../../../containers/AmazonMusic/constants";
import axios from "axios";
const initialState = {
  selectedAlbum: {},
  loading: false,
  playerOpen: false,
  audioTrackIndex: 0,
  playerPlaying: false,
};

export const getSelectedAlbum = createAsyncThunk(
  "selectedAlbum/getSelectedAlbum",
  async (id, thunkAPI) => {
    console.log("id of album is ", id);
    try {
      const response = await axios.get(`${ALBUM_URL}/${id}`, config);
      const data = response.data.data;
      console.log("selectedAlbum slice ", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedAlbumSlice = createSlice({
  name: "selectedAlbum",
  initialState,
  reducers: {
    setAudioTrackIndex: (state, action) => {
      state.audioTrackIndex = action.payload.audioTrackIndex;
      state.playerPlaying = true;
    },
    setPlayerPlaying: (state, action) => {
      state.playerPlaying = !action.payload;
    },
  },
  extraReducers: {
    [getSelectedAlbum.pending]: (state) => {
      state.loading = true;
    },
    [getSelectedAlbum.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.selectedAlbum = payload;
      state.playerOpen = true;
    },
    [getSelectedAlbum.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const { setAudioTrackIndex, setPlayerPlaying } =
  selectedAlbumSlice.actions;
export default selectedAlbumSlice.reducer;
