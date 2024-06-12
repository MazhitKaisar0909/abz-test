import { createSlice } from "@reduxjs/toolkit";
import { fetchTokenAsync } from "./fetchTokenSliceAsync";

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTokenAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchTokenAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload
        });
        builder.addCase(fetchTokenAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    }
})

export default tokenSlice.reducer;
