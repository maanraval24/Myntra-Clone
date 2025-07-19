import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Mutate draft directly
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true; // Mutate draft directly
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false; // Mutate draft directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;