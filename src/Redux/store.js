import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Reducer/productSlice";
import uiSlice from "./Reducer/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});
