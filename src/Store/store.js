import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./Slices/serviceSlice";
import totalHoursReducer from "./Slices/getTotalhoursSlice";
import InfoReducer from "./Slices/getCategorySlice";

// chat user activity
import userListReducer from "./Slices/Chat/userSlice";
import sendMessageReducer from "./Slices/Chat/sendMessageSlice";
import chatReducer from "./Slices/Chat/chatSlice";

const store = configureStore({
  reducer: {
    Info: InfoReducer,
    service: serviceReducer,
    hours: totalHoursReducer,
    users: userListReducer,
    message: sendMessageReducer,
    chat: chatReducer,
  },
});

export default store;
