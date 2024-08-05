// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the reducer function from CartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Specify the reducer associated with the 'cart' slice of the state
  },
});

export default store; // Export the configured Redux store

