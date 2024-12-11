import { createSlice } from "@reduxjs/toolkit";

const albumsSclice = createSlice({
    name: "albums",
    initialState: [],
    reducers: {
        indexAlbums: (state, action) => {
            return (state = action.payload);
        },
        addAlbum: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { indexAlbums, addAlbum } = albumsSclice.actions;
export default albumsSclice.reducer;
