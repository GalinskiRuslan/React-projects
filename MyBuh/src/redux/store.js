import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orgSlice from "./orgSlice";
import ownshipSlice from "./ownshipSlice";
import taxSlice from "./taxSlice";

const rootReducer = combineReducers({
  organization: orgSlice,
  ownship: ownshipSlice,
  taxSystem: taxSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
