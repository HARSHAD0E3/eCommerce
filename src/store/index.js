import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import categorySlice from "./categorySlice";
import cartItemSlice from "./cartItemSlice";
import orderSummarySlice from "./orderSummarySlice";
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    categories: categorySlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    cartItems: cartItemSlice.reducer,
    orderSummary: orderSummarySlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});

export default store;
