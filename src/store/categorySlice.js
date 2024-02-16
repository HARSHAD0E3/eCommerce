import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addInitialCategory: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
