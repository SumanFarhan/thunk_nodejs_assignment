import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
    'user/signup',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/signup', requestOptions)
        return res.json();
    }
)
export const loginUser = createAsyncThunk(
    'user/login',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ signin: data })
        };
        console.log({ signin: data })
        const res = await fetch('http://localhost:3001/signin', requestOptions)
        return res.json();
    }
)
export const todos = createAsyncThunk(
    'user/todos',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        console.log({ signin: data })
        const res = await fetch('http://localhost:3001/todos', requestOptions)
        return res.json();
    }
)

const initialState = {
    usersData: [],
    loginData: [],
}
export const adduser = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [signupUser.pending]: () => {
            console.log('pending');
        },
        [signupUser.fulfilled]: (state, action) => {
            state.usersData = action.payload.data;
            alert("User Registered SuccessFully")

        },
        [signupUser.rejected]: (state) => {
            alert("Please Fill all Fields")
        },

        [loginUser.fulfilled]: (state, action) => {
                state.loginData = action.payload.data;

        }
    }
})

