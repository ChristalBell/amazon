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
  },
});

export const { addCartItems } = cartItemSlice.reducer;
export default cartItemSlice;
