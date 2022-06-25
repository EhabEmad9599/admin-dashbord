import { configureStore } from "@reduxjs/toolkit";
import productDetailsSlice from "./Reducer/productDetialsSlice";
import uiSlice from "./Reducer/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    productDetails: productDetailsSlice.reducer,
  },
});
