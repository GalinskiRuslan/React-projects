import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const feachPhotos = createAsyncThunk(
  "unspash/RandomPhotos",
  async (_, thinkAPI) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random/?count=8&client_id=mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI"
      );
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error);
    }
  }
);
