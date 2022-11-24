import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChat = createAsyncThunk("chat/fetchChat", async (id) => {
  console.log("id were getting", id);
  let response = await axios.get(
    `https://gmb.prometteur.in:3330/retrieveMessages?conversationId=${id}`
  );
  return response.data;
});

const chatSlice = createSlice({
  name: "category",
  initialState: {
    chat: [],
    status: "idel",
  },
  extraReducers: {
    [fetchChat.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchChat.fulfilled]: (state, action) => {
      state.status = "Succeded";
      state.chat = action.payload;
    },
    [fetchChat.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default chatSlice.reducer;

export const Allchat = (state) => state.chat.chat;
export const chatStatus = (state) => state.chat.status;
