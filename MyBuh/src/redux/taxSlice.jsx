import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTax = createAsyncThunk(
  "taxSystem",
  async function (_, { rejectWithValue }) {
    const responce = await fetch("http://localhost:3011/tax-systems");
    try {
      if (!responce.ok) {
        throw new Error("Error! Can't get tax-system");
      }
      const data = responce.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const taxSlice = createSlice({
  name: "taxSystem",
  initialState: {
    taxSystems: [],
    status: null,
    error: null,
  },
  reducers: {
    addedTaxSystem(state, action) {
      state.taxSystems.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTax.pending]: (state) => {
      state.status = "loding";
      state.error = null;
    },
    [fetchTax.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.taxSystems = action.payload;
      state.error = null;
    },
    [fetchTax.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export default taxSlice.reducer;
export const { addedTaxSystem } = taxSlice.actions;
