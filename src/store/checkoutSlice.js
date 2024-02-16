import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: false,
  reducers: {
    showPopup: (state) => {
      return !state;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
