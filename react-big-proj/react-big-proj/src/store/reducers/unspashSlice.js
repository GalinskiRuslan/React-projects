import { createSlice } from "@reduxjs/toolkit";
import { feachPhotos } from "./actionCreators";

const initalState = {
  photos: [],
  isLoading: false,
  error: "",
};

export const unspashSlice = createSlice({
  name: "unspash",
  initialState: initalState,
  reducers: {},
  extraReducers: {
    [feachPhotos.pending]: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    [feachPhotos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.photos = action.payload;
    },
    [feachPhotos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default unspashSlice.reducer;
