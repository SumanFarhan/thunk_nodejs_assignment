import { configureStore } from "@reduxjs/toolkit";
import { adduser } from "./Reducer";

export const store = configureStore({
    reducer: {
        user: adduser.reducer,
    },
})