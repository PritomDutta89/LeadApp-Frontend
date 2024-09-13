// tokenSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  token: localStorage.getItem("tokenETL") || "",
};

// Create a slice
export const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("tokenETL", action.payload); // Store token in localStorage
    },
    clearToken: (state) => {
      state.token = "";
      localStorage.removeItem("tokenETL"); // Remove token from localStorage
    },
  },
});

// Export the actions
export const { setToken, clearToken } = tokenSlice.actions;

// Export the reducer
export default tokenSlice.reducer;
