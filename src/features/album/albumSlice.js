import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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
    currentAlbum:null
  },
  reducers: {
    setCurrentAlbum:(state,action)=>{
        const albums=[...state.topAlbums,...state.newAlbums]
        console.log('action dispatched');
        state.currentAlbum=albums.find((item) => item.id===action.payload)
        console.log(current(state));
    }
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

export const { setCurrentAlbum } = albumSlice.actions;

export default albumSlice.reducer;
