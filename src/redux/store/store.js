// store.js
import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../slice/tokenSlice.js"; // Import the token slice

const store = configureStore({
  reducer: {
    auth: tokenReducer, // Add the token reducer
  },
});

export default store;
