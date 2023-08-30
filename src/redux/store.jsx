import { configureStore } from '@reduxjs/toolkit';
import signinReducer from './auth';
export default configureStore({
   reducer: {
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      })
});
