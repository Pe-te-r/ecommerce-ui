import { configureStore } from "@reduxjs/toolkit";
import { usersApis } from "../api/auth&usersSlice"
import toastReducer from '../features/toast/toastSlice';
import { locationApi } from "../api/locationSlice";
;

export const store = configureStore({
    reducer: {
        [usersApis.reducerPath]: usersApis.reducer,
        [locationApi.reducerPath]: locationApi.reducer,
        toast: toastReducer
    },

    middleware:(getDefaultMiddleware: any)=> 
        getDefaultMiddleware().concat(usersApis.middleware,locationApi.middleware)
})
// export type RootState = {
//     toast: ToastState;
//   };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>