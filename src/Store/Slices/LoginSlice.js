import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    isLoggedIn: false,
    status: "idle",
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    Logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { Login, Logout } = userSlice.actions;
export default userSlice.reducer;
