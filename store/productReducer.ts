import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

export interface ProductState {
  finalSelection: any;
}
const initialState: ProductState = {
  finalSelection: [],
};

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
