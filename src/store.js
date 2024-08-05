// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Make sure the path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer, // Associate the cartReducer with the 'cart' slice of the state
  },
});

export default store;


