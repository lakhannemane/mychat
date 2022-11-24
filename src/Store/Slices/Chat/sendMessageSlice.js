import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSendMessage = createAsyncThunk(
  "message/fetchSendMessage",
  async (data) => {
    let response = await axios.post(
      `https://gmb.prometteur.in:3330/sendMessage`,
      data
    );
    return response.data;
  }
);

const sendMessageSlice = createSlice({
  name: "category",
  initialState: {
    sendMessage: [],
    status: "idel",
  },
  extraReducers: {
    [fetchSendMessage.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchSendMessage.fulfilled]: (state, action) => {
      state.status = "Succeded";
      state.sendMessage = action.payload;
    },
    [fetchSendMessage.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default sendMessageSlice.reducer;

export const AllsendMessage = (state) => state.message.sendMessage;
export const cendMessageStatus = (state) => state.message.status;
