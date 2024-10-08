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

// export const fetchProduct = createAsyncThunk("data/fetchData", async () => {
//   const response = await fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// });

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

    // .addCase(fetchProduct.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // });
  },
});

export const {} = apiSlice.reducer;
export default apiSlice;
