import { configureStore } from "@reduxjs/toolkit";
import { unspashApi } from "./unspashApi";

export const store = configureStore({
  reducer: { [unspashApi.reducerPath]: unspashApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unspashApi.middleware),
});
