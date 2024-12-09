import { createSlice } from "@reduxjs/toolkit";

const albumsSclice = createSlice({
    name: "albums",
    initialState: [],
    reducers: {
        indexAlbums: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { indexAlbums } = albumsSclice.actions;
export default albumsSclice.reducer;
