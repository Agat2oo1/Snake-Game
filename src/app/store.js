import { configureStore } from '@reduxjs/toolkit';
import moveSlice from '../Move/moveSlice';

export const store = configureStore({
  reducer: {
    move: moveSlice,
  },
});
