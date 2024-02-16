import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      const [newItem] = state.filter((item) => item.id === action.payload.id);
      if (!newItem) {
        return [...state, action.payload];
      } else {
        action.payload.quantity += newItem.quantity;
        state = state.filter((item) => item.id !== action.payload.id);
        return [...state, action.payload];
      }
    },
    updateCartItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      return [...state, action.payload];
    },
    removeCartItem: (state, action) => {
      return (state = state.filter((item) => item.id !== action.payload.id));
    },
    onCheckout: () => {
      return [];
    },
  },
});

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice;
