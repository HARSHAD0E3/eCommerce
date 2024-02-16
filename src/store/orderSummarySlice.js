import { createSlice } from "@reduxjs/toolkit";

const orderSummarySlice = createSlice({
  name: "orderSummary",
  initialState: {
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    incrementTotal: (state, action) => {
      state.totalItems = state.totalItems + action.payload.quantity;
      state.totalPrice = state.totalPrice + action.payload.price;
      return state;
    },
    decrementTotal: (state, action) => {
      state.totalItems = state.totalItems - action.payload.quantity;
      state.totalPrice = state.totalPrice - action.payload.price;
      return state;
    },
    onCheckout: () => {
      return {
        totalItems: 0,
        totalPrice: 0,
      };
    },
  },
});

export const orderSummaryActions = orderSummarySlice.actions;
export default orderSummarySlice;
