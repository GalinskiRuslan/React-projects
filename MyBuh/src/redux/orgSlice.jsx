import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrg = createAsyncThunk(
  "organization/fetchOrg",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3011/company");
      if (!response.ok) {
        throw new Error("server error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOrg = createAsyncThunk(
  "organization/deleteOrg",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const responce = await fetch(`http://localhost:3011/company/${id}`, {
        method: `DELETE`,
      });
      console.log(responce);
      if (!responce.ok) {
        throw new Error("Can't delete this task");
      }
      dispatch(deleteOrganization({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orgSlice = createSlice({
  name: "organization",
  initialState: {
    organization: [],
    status: null,
    error: null,
  },
  reducers: {
    addedOrganization(state, action) {
      state.organization.push(action.payload);
    },
    deleteOrganization(state, action) {
      console.log(state.organization, action.payload.id);
      state.organization = state.organization.filter(
        (org) => org.id !== action.payload.id
      );
    },
    changeOrganization(state, action) {
      let changeItem = state.organization.find(
        (item) => item.id == action.payload.id
      );

      changeItem.company_name = action.payload.company_name;
      changeItem.company_tin = action.payload.company_tin;
    },
  },
  extraReducers: {
    [fetchOrg.pending]: (state) => {
      state.status = "loding";
      state.error = null;
    },
    [fetchOrg.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.error = null;
      state.organization = action.payload;
    },
    [fetchOrg.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export default orgSlice.reducer;
export const { addedOrganization, deleteOrganization, changeOrganization } =
  orgSlice.actions;
