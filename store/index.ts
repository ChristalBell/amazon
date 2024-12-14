import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./cartItemReducer";
import productReducer from "./productReducer";

export const store = configureStore({
  reducer: {
    cartItems: cartItemReducer,
    finalSelection: productReducer,
  },
});
