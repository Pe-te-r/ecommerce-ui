// // // src/features/toast/toastSlice.js
// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   toasts: [],
// // };

// // const toastSlice = createSlice({
// //   name: 'toast',
// //   initialState,
// //   reducers: {
// //     addToast: (state, action: any) => {
// //       state.toasts.push(action.payload);
// //     },
// //     removeToast: (state, action) => {
// //       state.toasts = state.toasts.filter((toast: any) => toast.id !== action.payload);
// //     },
// //   },
// // });

// // export const { addToast, removeToast } = toastSlice.actions;
// // export default toastSlice.reducer;


// // src/features/toast/toastSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Toast {
//   id: number;
//   message: string;
//   type: 'success' | 'error' | 'warning' | 'info';
// }

// interface ToastState {
//   toasts: Toast[];
// }

// const initialState: ToastState = {
//   toasts: [],
// };

// const toastSlice = createSlice({
//   name: 'toast',
//   initialState,
//   reducers: {
//     addToast: (state, action: PayloadAction<Toast>) => {
//       state.toasts.push(action.payload);
//     },
//     removeToast: (state, action: PayloadAction<number>) => {
//       state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
//     },
//   },
// });

// export const { addToast, removeToast } = toastSlice.actions;
// export default toastSlice.reducer;


// src/features/toast/toastSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<number>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
