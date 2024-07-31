import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "./URL";

export const locationApi  = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder)=>({
        fetchLocation: builder.query<any,any>({
            query: ({detailed})=> detailed ?'locations?detailed=true': 'locations',
        }),
        addLocation: builder.mutation<any,any>({
            query: (location: any)=> ({
                url: 'locations',
                method: 'POST',
                body: location
            }),
        }),
        deleteLocation: builder.mutation<any,number>({
            query: (id: number)=> ({
                url: `locations/${id}`,
                method: 'DELETE',
            }),
        })
    })
})

type UseFetchLocationQuery = typeof locationApi.endpoints.fetchLocation.useQuery
type UseAddLocationQuery = typeof locationApi.endpoints.addLocation.useMutation
type UseDeleteLocationQuery = typeof locationApi.endpoints.deleteLocation.useMutation

export const UseFetchLocationQuery: UseFetchLocationQuery = locationApi.endpoints.fetchLocation.useQuery
export const UseAddLocationQuery: UseAddLocationQuery = locationApi.endpoints.addLocation.useMutation
export const UseDeleteLocationQuery: UseDeleteLocationQuery = locationApi.endpoints.deleteLocation.useMutation