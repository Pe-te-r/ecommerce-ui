import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "./URL";

export const locationApi  = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder)=>({
        fetchLocation: builder.query<any,any>({
            query: ({detailed})=> detailed ?'locations?detailed=true': 'locations',
        })
    })
})

type UseFetchLocationQuery = typeof locationApi.endpoints.fetchLocation.useQuery

export const UseFetchLocationQuery: UseFetchLocationQuery = locationApi.endpoints.fetchLocation.useQuery