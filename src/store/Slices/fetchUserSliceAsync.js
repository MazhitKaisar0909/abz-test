import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserAsync = createAsyncThunk('users/fetchUser', async ({ page, count }, thunkAPI) => {
    try {

        const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw error; 
    }
});

const createUserAsync = createAsyncThunk('user/createUser', async (formData, thunkAPI) => {
    try {

        const state = thunkAPI.getState();
        console.log(state, 555); 

        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        console.log(response);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

export { fetchUserAsync, createUserAsync };
