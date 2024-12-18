import { createSlice } from "@reduxjs/toolkit";

const albumDetailsSclice = createSlice({
    name: "details",
    initialState: null,
    reducers: {
        setAlbum: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setAlbum } = albumDetailsSclice.actions;
export default albumDetailsSclice.reducer;
