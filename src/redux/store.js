import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import savedProductsReducer from './save';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    savedProducts: savedProductsReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});
