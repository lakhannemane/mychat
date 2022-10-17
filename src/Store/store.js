import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices/getCategorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
