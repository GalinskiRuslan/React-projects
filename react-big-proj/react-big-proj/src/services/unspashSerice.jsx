import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unspashAPI = createApi({
  reducerPath: "unspashAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com" }),
  endpoints: (builder) => ({
    feachRandomPhoto: builder.query({
      query: (count) => ({
        url: "/photos/random/",
        params: {
          count,
          client_id: "mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI",
        },
      }),
    }),
    feachSearchPhoto: builder.query({
      query: (search, page) => ({
        url: "/search/photos/",
        params: {
          page,
          query: search,
          client_id: "mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI",
        },
      }),
    }),
    feachPhotoById: builder.query({
      query: (id) => ({
        url: `/photos/${id}`,
        params: {
          client_id: "mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI",
        },
      }),
    }),
  }),
});
