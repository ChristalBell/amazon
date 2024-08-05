import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 0,
      title: "",
      image: "",
      price: 0,
      rating: { rate: 0, count: 0 },
    },
  ],

  reducers: {
    setProducts: (state, action) => {
      state.products += action.payload;
    },

    clearProducts: (state) => {
      state.products = [
        {
          id: 0,
          title: "",
          image: "",
          price: 0,
          rating: { rate: 0, count: 0 },
        },
      ];
    },
  },
});
export const { clearProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
