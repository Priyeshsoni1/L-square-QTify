import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchNewAlbums, fetchTopAlbums } from "./albumApi";

export const fetchNewAlbumsThunk = createAsyncThunk(
  "albums/fetchNewAlbums",
  async () => {
    const data = await fetchNewAlbums();
    return data;
  }
);
export const fetchTopAlbumsThunk = createAsyncThunk(
  "albums/fetchTopAlbums",
  async () => {
    const data = await fetchTopAlbums();
    return data;
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    status: null,
    topAlbums: [],
    newAlbums: [],
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewAlbumsThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchNewAlbumsThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.newAlbums = action.payload;
      })
      .addCase(fetchNewAlbumsThunk.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchTopAlbumsThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTopAlbumsThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.topAlbums = action.payload;
      })
      .addCase(fetchTopAlbumsThunk.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// export const {  } = albumSlice.actions;

export default albumSlice.reducer;
