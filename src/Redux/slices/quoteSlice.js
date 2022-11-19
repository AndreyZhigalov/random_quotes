import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStatus = {
    PENDING: "Get quote from api",
    SUCCESS: "Datas received",
    ERROR: "Fetching faild",
}

const initialState = {
    quote: "",
    author: "",
    status: fetchStatus.PENDING
}

export const getQuote = createAsyncThunk("get_quote/status", async (_, Thunk) => {
    try {
        const { data } = await axios.get("https://api.quotable.io/random?maxLength=70")
        return data
    } catch (error) {
        return Thunk.rejectWithValue
    }
})

const quoteSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {        
    },
    extraReducers(builder) {
        builder.addCase(getQuote.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getQuote.fulfilled, (state, action) => {
            let { content, author } = action.payload
            state.quote = content
            state.author = author
            state.status = fetchStatus.SUCCESS
        })
        builder.addCase(getQuote.rejected, (state) => {
            state.status = fetchStatus.ERROR
        })
    }
})

export default quoteSlice.reducer