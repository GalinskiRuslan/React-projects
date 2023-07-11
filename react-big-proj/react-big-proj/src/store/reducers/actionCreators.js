import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const feachPhotos = createAsyncThunk(
  "unspash/RandomPhotos",
  async (_, thinkAPI) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random/?count=12&client_id=mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI"
      );
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error);
    }
  }
);
export const feachSearchPhotos = createAsyncThunk(
  "unspash/SearchPhotos",
  async (searchValue, thinkAPI) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com//search/photos/?query=${searchValue}&client_id=mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI`
      );
      return response.data.results;
    } catch (error) {
      return thinkAPI.rejectWithValue(error);
    }
  }
);
