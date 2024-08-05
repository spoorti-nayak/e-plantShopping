import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.name === product.name);

      if (existingProduct) {
        // If product already in cart, we can choose to update quantity or just ignore
        // For simplicity, we're not doing anything here if the product is already in the cart
      } else {
        state.items.push(product); // Add new product to the cart
      }
    },
    removeItem: (state, action) => {
      const productName = action.payload;
      state.items = state.items.filter(item => item.name !== productName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const product = state.items.find(item => item.name === name);
      if (product) {
        // Update product quantity if necessary
        // Assuming product object has a quantity property
        product.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
