import { configureStore, Tuple } from "@reduxjs/toolkit";
import apiSlice from "../store/productsSlice";
import cartItemSlice from "../store/cartItemSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [cartItemSlice.reducerPath]: cartItemSlice.reducer,

    middleware: () => new Tuple(apiSlice),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
