import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetServiceList = createAsyncThunk(
  "category/fetServiceList",
  async () => {
    let response = await axios.get(
      `https://mybusinessbusinessinformation.googleapis.com/v1/locations/17198295898980539095?readMask=serviceItems`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("g_token")}`,
        },
      }
    );
    return response.data.serviceItems;
  }
);

const getServicesSliice = createSlice({
  name: "category",
  initialState: {
    services: [],
    status: "idel",
  },
  extraReducers: {
    [fetServiceList.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetServiceList.fulfilled]: (state, action) => {
      state.status = "Succeded";
      state.services = action.payload;
    },
    [fetServiceList.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default getServicesSliice.reducer;
