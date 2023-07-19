import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unspashApi = createApi({
  reducerPath: "unspashApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com",
  }),
  endpoints: (builder) => ({
    getRandomPhotos: builder.query({
      query: (count) => ({
        url: "/photos/random/",
        params: {
          count,
          client_id: "mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI",
        },
      }),
    }),
  }),
});
