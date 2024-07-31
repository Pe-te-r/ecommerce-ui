import { configureStore } from "@reduxjs/toolkit";
import { usersApis } from "../api/auth&usersSlice"
import toastReducer from '../features/toastSlice';
;

export const store = configureStore({
    reducer: {
        [usersApis.reducerPath]: usersApis.reducer,
        toast: toastReducer
    },

    middleware:(getDefaultMiddleware: any)=> 
        getDefaultMiddleware().concat(usersApis.middleware)
})
// export type RootState = {
//     toast: ToastState;
//   };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>