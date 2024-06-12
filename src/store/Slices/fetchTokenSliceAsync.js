import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTokenAsync = createAsyncThunk('token/fetchToken', async ({ page, count }) => {
    try {

        const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)

        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }

});



export { fetchTokenAsync };