import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums/albumsSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        albums: albumsReducer,
        cart: cartReducer,
    },
});
