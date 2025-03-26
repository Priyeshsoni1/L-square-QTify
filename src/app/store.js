import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/song/songSlice"
import albumReducer from "../features/album/albumSlice"
export const store= configureStore({
    reducer: {
        song:songReducer,
        album:albumReducer
    }
})