import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./categorySlice";
import ProductSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
    carts: cartSlice,
  },
});