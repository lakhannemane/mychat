import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseUrl = "https://gmb.prometteur.in:3330";
// all feed
export const fetchAllFeed = createAsyncThunk(
  "feed/fetchAllFeed",
  async (id) => {
    console.log(id, "acount id");
    try {
      const res = await axios.get(`${BaseUrl}/feeds/getFeeds`, {
        params: { account_id: `${id}` },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });

      if (res.status === 200) {
        console.log(res.data, "i fetched All feed");
        return res.data;
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
);

// single feed
export const fetchSingleFeed = createAsyncThunk(
  "feed/fetchSingleFeed",
  async (id) => {
    console.log("id", id);
    try {
      const res = await axios.get(`${BaseUrl}/feeds/getFeedData`, {
        params: { feed_id: `${id}` },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });

      console.log(res.data, "fetch single data");
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
);

// add feed data
export const addFeed = createAsyncThunk("feed/addFeed", async (values) => {
  console.log("values data", values);
  try {
    const res = await axios.post(`${BaseUrl}/feeds`, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });

    if (res.status === 200) {
      console.log(res.data, "added succefully");
      return res.data;
    }
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

// Edit feed data
export const editFeed = createAsyncThunk("feed/editFeed", async (values) => {
  try {
    const res = await axios.put(`${BaseUrl}/feeds/editFeed`, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });

    if (res.status === 200) {
      console.log(res.data, "Edit data");
      return res.data;
    }
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
    jobs: [],
    status: "idle",
  },
  extraReducers: {
    // get all feed
    [fetchAllFeed.pending]: (state, action) => {},
    [fetchAllFeed.fulfilled]: (state, action) => {
      state.feed = action.payload;
    },
    [fetchAllFeed.rejected]: (state, action) => {},
    // get sigle feed
    [fetchSingleFeed.pending]: (state, action) => {},
    [fetchSingleFeed.fulfilled]: (state, action) => {
      state.jobs = action.payload;

      if (action.payload.message) {
        state.status = "error";
      } else {
        state.status = "success";
      }
    },
    [fetchSingleFeed.rejected]: (state, action) => {},
    // add feed
    [addFeed.pending]: (state, action) => {},
    [addFeed.fulfilled]: (state, action) => {},
    [addFeed.rejected]: (state, action) => {},
    // edit feed
    [editFeed.pending]: (state, action) => {},
    [editFeed.fulfilled]: (state, action) => {},
    [editFeed.rejected]: (state, action) => {},
  },
});

export default feedSlice.reducer;
export const allFeeds = (state) => state.feed.feed;
export const allJobs = (state) => state.feed.jobs;

export const error = (state) => state.feed.status;
