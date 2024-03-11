import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = (state.items = state.items.findIndex(
        (item) => item?._id === action.payload
      ));
      let basket = [...state.items];
      if (index >= 0) {
        basket.splice(index, 1);
      } else {
        console.warn(`Not in the Cart`);
      }
      state.items = basket;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) =>
  state?.cart?.items?.filter((item) => item?._id === id);
export const cartTotal = (state) =>
  state?.cart?.items?.reduce((total, item) => total + item?.price, 0);

export default cartSlice.reducer;
