import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./reducers/itemsSlice";

const rootReduser = combineReducers({
  itemReducers: itemsSlice,
});

export const store = configureStore({ reducer: rootReduser });
