import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums/albumsSlice";

export const store = configureStore({
    reducer: {
        albums: albumsReducer,
    },
});
