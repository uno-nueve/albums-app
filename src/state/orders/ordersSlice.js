import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: "orders",
    initialState: null,
    reducers: {
        setOrder: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
