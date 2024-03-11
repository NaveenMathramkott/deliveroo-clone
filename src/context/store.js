import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../context/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
