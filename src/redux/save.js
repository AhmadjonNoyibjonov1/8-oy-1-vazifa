import { createSlice } from '@reduxjs/toolkit';

const savedProductsSlice = createSlice({
  name: 'savedProducts',
  initialState: {
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    clearSavedProducts: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, clearSavedProducts } = savedProductsSlice.actions;

export const selectSavedProductsCount = (state) => state.savedProducts.items.length;

export default savedProductsSlice.reducer;
