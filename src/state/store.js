import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums/albumsSlice";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/ordersSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        albums: albumsReducer,
        cart: persistedReducer,
        orders: ordersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);
