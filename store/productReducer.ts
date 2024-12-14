import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

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
export const getFinalSelection = (state: RootState) =>
  state.finalSelection.finalSelection;
