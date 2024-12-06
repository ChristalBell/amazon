import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./cartItemReducer";

export const store = configureStore({
  reducer: {
    cartItems: cartItemReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     [cartItemSlice.reducerPath]: cartItemSlice.reducer,

//     middleware: () => new Tuple(apiSlice),
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
