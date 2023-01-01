import { configureStore } from "@reduxjs/toolkit";
import { adduser } from "./adduser";

export const store = configureStore({
    reducer: {
        user: adduser.reducer,
    },
})