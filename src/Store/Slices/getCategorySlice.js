import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl =
  "https://mybusinessbusinessinformation.googleapis.com/v1/accounts/118375854560050713875/locations?readMask=storeCode,regularHours,name,languageCode,title,phoneNumbers,categories,storefrontAddress,websiteUri,regularHours,specialHours,serviceArea,labels,adWordsLocationExtensions,latlng,openInfo,metadata,profile,relationshipData,moreHours,serviceItems";

export const fetchCategoryList = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    let response = await axios.get(`${baseUrl}`, {
      header: {
        Authorization:
          "ya29.a0Aa4xrXPEU0I5vJfRDiCi_63V0tnQI_kwKWLu7nNQG4cu4xMET1KHVb0zDNijaVDZf1BNFaOu9vTWKyeTIRwjp_ociTeGscRx7ck0fxY8OIVK6MrGjoyelzDhvuX3QqMkNf8wD7ctFTLH4OPziECQSX6-Y9CTdgaCgYKATASARISFQEjDvL9ISJ5DMTVoelNJjFitcnZog0165",
      },
    });
    try {
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getCategorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    status: "idel",
  },
  extraReducers: {
    [fetchCategoryList.pending]: (state, action) => {
      state.status = "Loading";
    },
    [fetchCategoryList.fulfilled]: (state, action) => {
      state.status = "Succeded";
      state.category = action.payload;
    },
    [fetchCategoryList.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default getCategorySlice.reducer;
