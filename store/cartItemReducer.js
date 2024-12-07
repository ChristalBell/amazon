import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: 0,
  },
  reducers: {
    addCartItems: (state) => {
      state.cartItems += 1;
    },
    removeCartItems: (state) => {
      state.cartItems -= 1;
    },
  },
});

export const { addCartItems, removeCartItems } = cartItemSlice.actions;
export default cartItemSlice.reducer;
