// slices/productCountSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ProductCountSlice = createSlice({
  name: "ProductCount",
  initialState: {
    count: 1,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = ProductCountSlice.actions;
export default ProductCountSlice.reducer; // tạo ra ProductCountReducer (name + Reducer)
