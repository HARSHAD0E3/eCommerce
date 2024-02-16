import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
      return state;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      return state;
    },
    markFetchingEnded: (state) => {
      state.currentlyFetching = false;
      return state;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
