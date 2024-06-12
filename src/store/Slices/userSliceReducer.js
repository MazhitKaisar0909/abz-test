import { createSlice } from "@reduxjs/toolkit";
import {fetchUserAsync, createUserAsync} from "./fetchUserSliceAsync";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: {},
        page: 1,
        count: 6,
        nextUrl: null,
        previusUrl: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUserAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.nextUrl = action.payload.links.next_url;
            state.previusUrl = action.payload.links.prev_url;
            state.page = action.payload.page;
            state.count = action.payload.count;
            const users = action.payload.users.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            }, {});
            console.log(state.users)
            state.users = { ...state.users, ...users };
        });
        builder.addCase(fetchUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(createUserAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createUserAsync.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.users = { ...state.users, [action.payload.id]: action.payload};
        });
        builder.addCase(createUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default userSlice.reducer;
