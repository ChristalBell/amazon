import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface ProductState {
  finalSelection: Array<Product>;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const initialState: ProductState = {
  finalSelection: [],
};
// const initialState: ProductState = {
//   finalSelection: [],
// };

export const productSlice = createSlice({
  name: "finalSelection",
  initialState,
  reducers: {
    addSelection: (state, action: PayloadAction) => {
      state.finalSelection.push(action.payload);
    },
  },
});

export const { addSelection } = productSlice.actions;
export default productSlice.reducer;
export const getFinalSelection = (state: RootState) => state.finalSelection;
