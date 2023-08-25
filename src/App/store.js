import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albums/albumSlice";
import selectedAlbumReducer from "./features/albums/selectedAlbumSlice";
import searchSongReducer from "./features/SearchSongs/SearchSongSlice";
import userReducer from "./features/User/userSlice";
import registeredUserReducer from "./features/User/registerUserSlice";
export const store = configureStore({
  reducer: {
    albums: albumReducer,
    selectedAlbums: selectedAlbumReducer,
    searchSong: searchSongReducer,
    user: userReducer,
    registeredUser: registeredUserReducer,
  },
});
