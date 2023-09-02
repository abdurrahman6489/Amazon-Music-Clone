import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config, URLS } from "../../../containers/AmazonMusic/constants";
import axios from "axios";
const initialState = {
  selectedAlbum: {},
  loading: false,
  playerOpen: false,
  audioTrackIndex: 0,
  playerPlaying: false,
  error: "",
};

export const getSelectedAlbum = createAsyncThunk(
  "selectedAlbum/getSelectedAlbum",
  async (id, thunkAPI) => {
    console.log("id of album is ", id);
    try {
      const response = await axios.get(`${URLS.ALBUM_URL}/${id}`, config);
      const data = response.data.data;
      console.log("selectedAlbum slice ", data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
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
      state.error = "";
    },
    [getSelectedAlbum.rejected]: (state) => {
      state.loading = false;
      state.error = "Sorry this song does not exist";
    },
  },
});
export const { setAudioTrackIndex, setPlayerPlaying } =
  selectedAlbumSlice.actions;
export default selectedAlbumSlice.reducer;
