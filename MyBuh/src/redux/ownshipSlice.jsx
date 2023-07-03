import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOwn = createAsyncThunk(
  "ownShip/fetchOwn",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3011/ownerships");
      if (!response.ok) {
        throw new Error("Erorr! Can't get data from ownship");
      }
      const data = response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const ownShipSlice = createSlice({
  name: "ownship",
  initialState: {
    ownships: [],
    status: null,
    error: null,
  },
  reducers: {
    addedOwnship(state, action) {
      state.ownships.push(action.payload);
    },
  },
  extraReducers: {
    [fetchOwn.pending]: (state) => {
      state.status = "loding";
      state.error = null;
    },
    [fetchOwn.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.ownships = action.payload;
      state.error = null;
    },
    [fetchOwn.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export default ownShipSlice.reducer;
export const { addedOwnship } = ownShipSlice.actions;
