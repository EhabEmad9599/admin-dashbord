import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: {},
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    productDetailsHandler(state, action) {
      let item = action.payload;
      state.productDetails = item;
    },
    addItemToCart(state, action) {
      let newItem = action.payload;
      state.totalQuantity++;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.img,
          price: newItem.price,
          brand: newItem.brand,
          quantity: 1,
        });
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice -= existingItem.quantity * existingItem.price;
      state.totalQuantity -= existingItem.quantity;
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    decrementItemFromCart(state, action) {
      //decrementItemFromCart
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
      } else {
        existingItem.quantity--;
        state.totalPrice = state.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;

// ! totla price inncrement
