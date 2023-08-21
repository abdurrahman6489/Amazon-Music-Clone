import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albums/albumSlice";
import selectedAlbumReducer from "./features/albums/selectedAlbumSlice";
export const store = configureStore({
  reducer: {
    albums: albumReducer,
    selectedAlbums: selectedAlbumReducer,
  },
});
