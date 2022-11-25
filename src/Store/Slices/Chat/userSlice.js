import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChatUser = createAsyncThunk(
  "user/fetchChatUser",
  async () => {
    let response = await axios.get(
      `https://gmb.prometteur.in:3330/retrieveThreads`
    );
    console.log(response);
    return response.data;
  }
);

const chatUserSlice = createSlice({
  name: "category",
  initialState: {
    chatUser: [],
    status: "idel",
  },
  extraReducers: {
    [fetchChatUser.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchChatUser.fulfilled]: (state, action) => {
      state.status = "Succeded";
      state.chatUser = action.payload;
    },
    [fetchChatUser.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default chatUserSlice.reducer;

export const chatUserList = (state) => state.users.chatUser;
export const chatUserListStatus = (state) => state.users.status;
