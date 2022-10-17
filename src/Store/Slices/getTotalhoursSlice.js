import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Baseurl = "newmne";

const fetchHours = createAsyncThunk("hours/fetchHours", async () => {
  try {
    let response = axios.get(`${Baseurl}`);
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
