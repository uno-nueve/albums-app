import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const isStored = state.find((album) => album._id === action.payload._id);
            if (!isStored) {
                state.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((album) => album._id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
