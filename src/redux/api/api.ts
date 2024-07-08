import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-3-steel.vercel.app",
  }),
  endpoints: () => ({}),
});
