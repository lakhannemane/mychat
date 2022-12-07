import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "Acount",
  initialState: {
    Accounts: JSON.parse(localStorage.getItem("user_accounts"))
      ? JSON.parse(localStorage.getItem("user_accounts"))
      : [],
    accStatus: "idle",
    error: "",
  },
  reducers: {
    AddAccount: (state, action) => {
      const existing = state.Accounts.find(
        (item) => item.id === action.payload.id
      );
      console.log(existing, "existing user here");
      if (existing) {
        state.Accounts = [...state.Accounts];
        state.accStatus = "User Already registerd";
        alert("Already added your account");
        localStorage.setItem("user_accounts", JSON.stringify(state.Accounts));
      } else {
        state.Accounts = [...state.Accounts, action.payload];
        localStorage.setItem("user_accounts", JSON.stringify(state.Accounts));
      }
    },
  },
});

export const { AddAccount } = accountSlice.actions;
export default accountSlice.reducer;

export const allAccounts = (state) => state.Account.Accounts;
