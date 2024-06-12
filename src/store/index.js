import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./Slices/userSliceReducer";
import tokenSliceReducer from "./Slices/tokenSliceReducer";

const store = configureStore({
    reducer:{
        users: userSliceReducer,
        token: tokenSliceReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store