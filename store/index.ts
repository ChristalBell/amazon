import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./cartItemReducer";

export const store = configureStore({
  reducer: {
    cartItems: cartItemReducer,
  },
});
