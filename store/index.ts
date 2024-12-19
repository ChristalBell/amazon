import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./cartItemReducer";
import productReducer from "./productReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartItemReducer = persistReducer(persistConfig, cartItemReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
export const store = configureStore({
  reducer: {
    cartItems: persistedCartItemReducer,
    finalSelection: persistedProductReducer,
  },
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
