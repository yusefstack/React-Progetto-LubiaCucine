import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/storeSlices/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});