// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // Initialize with an empty array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart or increase its quantity if already in the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.value.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity by 1
      } else {
        state.value.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
    },
    // Remove an item from the cart
    removeItem: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
    },
    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.value.find(cartItem => cartItem.id === id);

      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.value = state.value.filter(cartItem => cartItem.id !== id);
        }
      }
    },
    // Clear the cart
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
