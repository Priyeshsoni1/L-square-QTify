import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGenres, fetchSongs } from "./songApi";

export const fetchSongsThunk = createAsyncThunk(
  "songs/fetchSongs",
  async () => {
    const data = await fetchSongs();
    return data;
  }
);
export const fetchGenresThunk = createAsyncThunk(
  "songs/fetchGenres",
  async () => {
    const data = await fetchGenres();
    return data;
  }
);

export const songSlice = createSlice({
  name: "song",
  initialState: {
    status: null,
    songs: [],
    genres: [],
    filteredSongs:[]
  },
  reducers: {
    filterSongsByGenre:(state,action)=>{
      console.log('action.payload',action.payload);
       if(action.payload.key==="all"){
        state.filteredSongs= state.songs
       }else{
         state.filteredSongs=state.songs.filter((song)=>song.genre.key===action.payload.key)

       }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSongsThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSongsThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.songs = action.payload;
        state.filteredSongs = action.payload;
      })
      .addCase(fetchSongsThunk.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchGenresThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGenresThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.genres = [{key:'all',label:"All"},...action.payload];
      })
      .addCase(fetchGenresThunk.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {filterSongsByGenre} = songSlice.actions;

export default songSlice.reducer;
