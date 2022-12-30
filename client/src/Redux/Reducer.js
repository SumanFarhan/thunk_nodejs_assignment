import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
    'message/add',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ signup:data})
        };
        const res = await fetch('http://localhost:3000/signup',requestOptions)
        return res.json();
    }
)

const initialState = {
    users: []
}
export const adduser = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    // extraReducers: {
    //     [updateMessage.rejected]: (state) => {
    //         console.log('Rejected');
    //     },
    //     [updateMessage.fulfilled]: (state, action) => {
    //         console.log(action.payload);
    //         state.messages = action.payload;
    //     },
    //     [updateMessage.pending]: state => {
    //         console.log('Pending...');
    //     },
    //     [readMessage.fulfilled]: (state, action) => {
    //         state.messages = action.payload;
    //     }
    // }
})

