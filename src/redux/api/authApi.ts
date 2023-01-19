import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./types";

export const authApi = createApi({
  reducerPath: "authAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tasty-activity.pockethost.io/api/",
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    loginUser: builder.mutation<IUser, null>({
      query: (payload) => ({
        url: `collections/user/auth-with-password`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      transformResponse: (response: { data: IUser }, meta, arg) => response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
