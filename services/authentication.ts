import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),
    updatePassword: builder.mutation({
      query: (formData) => ({
        url: "/update-password",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useUpdatePasswordMutation } =
  authenticationApi;
