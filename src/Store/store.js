import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./Slices/serviceSlice";
import totalHoursReducer from "./Slices/getTotalhoursSlice";
import InfoReducer from "./Slices/getCategorySlice";

const store = configureStore({
  reducer: {
    Info: InfoReducer,
    service: serviceReducer,
    hours: totalHoursReducer,
  },
});

export default store;
