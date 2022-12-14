import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

console.log("loclastorage token is get", localStorage.getItem("g_token"));

export const fetchHours = createAsyncThunk("hours/fetchHours", async () => {
  try {
    let response = axios.get(
      `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/118375854560050713875/locations?readMask=regularHours`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("g_token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const getTotalHouersSlice = createSlice({
  name: "totalHours",
  initialState: {
    Hours: [],
    status: "Idle",
  },
  extraReducers: {
    [fetchHours.pending]: (state, acion) => {
      state.status = "loading";
    },
    [fetchHours.fulfilled]: (state, action) => {
      state.status = "succceed";
    },
    [fetchHours.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default getTotalHouersSlice.reducer;
