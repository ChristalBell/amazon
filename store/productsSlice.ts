import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface DataState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "failed to fetch data";
      });
  },
});

export const {} = apiSlice.reducer;
export default apiSlice;
