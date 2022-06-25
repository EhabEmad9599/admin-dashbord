import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: {}
}

const productDetailsSlice = createSlice({
  name:'productDetails',
  initialState:initialState,
  
  reducers: {
    productDetailsHandler(state, action) {
      let item = action.payload;
      console.log(item);
      state.productDetails = action.payload;
    }
  }
})

export const productDetailsAction = productDetailsSlice.actions;
export default productDetailsSlice;