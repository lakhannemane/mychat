import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInfo = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    let response = await axios.get(
      `https://mybusinessbusinessinformation.googleapis.com/v1/locations/17198295898980539095?readMask=storeCode,regularHours,name,languageCode,title,phoneNumbers,categories,storefrontAddress,websiteUri,regularHours,specialHours,serviceArea,labels,adWordsLocationExtensions,latlng,openInfo,metadata,profile,relationshipData,moreHours,serviceItems`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("g_token")}`,
        },
      }
    );
    return response.data;
  }
);

const getAllInfo = createSlice({
  name: "category",
  initialState: {
    category: [],
    status: "idel",
  },
  extraReducers: {
    [fetchInfo.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchInfo.fulfilled]: (state, action) => {
      state.status = "Succeded";
      state.category = action.payload;
    },
    [fetchInfo.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default getAllInfo.reducer;
