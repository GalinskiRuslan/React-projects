import { combineReducers, configureStore } from "@reduxjs/toolkit";
import unspashSlice from "./reducers/unspashSlice";
import { unspashAPI } from "../services/unspashSerice";

const rootReducer = combineReducers({
  unspashSlice,
  [unspashAPI.reducerPath]: unspashAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unspashAPI.middleware),
});

export default store;
