import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "./URL";


export const usersApis = createApi({
    reducerPath: 'usersApis',
    baseQuery:fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder) => ({
        registerUser: builder.mutation<any,any>({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
        }),
        loginUser: builder.mutation<any,any>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
        })
    })
})

type UseLoginUserMutation = typeof usersApis.endpoints.loginUser.useMutation;
type UseRegisterUserMutation = typeof usersApis.endpoints.registerUser.useMutation;


export const UseLoginUserMutationL: UseLoginUserMutation =usersApis.endpoints.loginUser.useMutation
export const UseRegisterUserMutation: UseRegisterUserMutation =usersApis.endpoints.registerUser.useMutation