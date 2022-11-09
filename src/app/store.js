import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from '../features/schoolSlice';
import emailedReducer from '../features/emailedSlice';

export const store = configureStore({
  reducer: {
    school: schoolReducer,
    emailed: emailedReducer,
  },
});
