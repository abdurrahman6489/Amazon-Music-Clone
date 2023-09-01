import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const comingSoonSlice = createSlice({
  name: "comingSoon",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    },
  },
});

export const { setClose, setOpen } = comingSoonSlice.actions;
export default comingSoonSlice.reducer;
