import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: true,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => ({
      ...state,
      darkMode: payload,
    }),
  },
});
export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
