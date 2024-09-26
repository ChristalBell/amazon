import { configureStore, Tuple } from "@reduxjs/toolkit";
import apiSlice from "../store/productsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    middleware: () => new Tuple(apiSlice),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
