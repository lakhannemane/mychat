import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async () => {
    try {
      let response = await axios.get(
        `https://gmb.prometteur.in:3330/accounts/getAccounts`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const AddAccounts = createAsyncThunk(
  "accounts/AddAccounts",
  async ({ data }) => {
    try {
      let response = await axios.get(
        `https://gmb.prometteur.in:3330/accounts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const accountSlice = createSlice({
  name: "Acount",
  initialState: {
    Accounts: [],
    addedAccount: [],
    accStatus: "idle",
    error: "",
  },
  reducers: {
    AddAccount: (state, action) => {
      console.log(action.payload);
      state.addedAccount = action.payload;
    },
  },
  extraReducers: {
    [fetchAccounts.pending]: (state, action) => {
      // state.Accounts = action.payload
    },
    [fetchAccounts.fulfilled]: (state, action) => {
      state.addedAccount = action.payload;
    },
    [fetchAccounts.rejected]: (state, action) => {
      // state.Accounts = action.payload
    },
  },
});

export const { AddAccount } = accountSlice.actions;
export default accountSlice.reducer;

export const allAccounts = (state) => state.Account.addedAccount;
