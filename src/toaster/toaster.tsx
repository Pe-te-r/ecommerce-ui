
// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { removeToast } from '../features/toastSlice';

// // const Toaster = () => {
// //   const toasts = useSelector((state: any) => state.toast.toasts);
// //   const dispatch = useDispatch();

// //   React.useEffect(() => {
// //     toasts.forEach((toast: any) => {
// //       const { id, message, type } = toast;
// //       toastFunction(message, type);
// //       dispatch(removeToast(id));
// //     });
// //   }, [toasts, dispatch]);

// //   const toastFunction = (message: any, type: any) => {
// //     switch (type) {
// //       case 'success':
// //         toast.success(message);
// //         break;
// //       case 'error':
// //         toast.error(message);
// //         break;
// //       case 'warning':
// //         toast.warning(message);
// //         break;
// //       default:
// //         toast.info(message);
// //         break;
// //     }
// //   };

// //   return <ToastContainer theme='dark' />;
// // };

// // export default Toaster;


// // src/components/Toaster.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { removeToast } from '../features/toastSlice';

// const Toaster = () => {
//   const toasts = useSelector((state: any) => state.toast.toasts);
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     toasts.forEach((toast: any) => {
//       const { id, message, type } = toast;
//       toastFunction(message, type);
//       dispatch(removeToast(id));
//     });
//   }, [toasts, dispatch]);

//   const toastFunction = (message: any, type: any) => {
//     switch (type) {
//       case 'success':
//         toast.success(message);
//         break;
//       case 'error':
//         toast.error(message);
//         break;
//       case 'warning':
//         toast.warning(message);
//         break;
//       default:
//         toast.info(message);
//         break;
//     }
//   };

//   return <ToastContainer theme='dark' />;
// };

// export default Toaster;


// src/components/Toaster.tsx
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../store/store';
import { removeToast } from '../features/toastSlice';

const Toaster = () => {
  const toasts = useSelector((state: RootState) => state.toast.toasts);
  const dispatch = useDispatch();

  useEffect(() => {
    toasts.forEach(toastItem => {
      const { id, message, type } = toastItem;
      toastFunction(message, type);
      dispatch(removeToast(id));
    });
  }, [toasts, dispatch]);

  const toastFunction = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast.info(message);
        break;
    }
  };

  return <ToastContainer theme='dark' />;
};

export default Toaster;
