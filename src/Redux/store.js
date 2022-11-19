import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./slices/quoteSlice"

const store = configureStore({
    reducer: {
        quoteSlice
    }
})

export default store

