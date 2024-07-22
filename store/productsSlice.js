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
export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
