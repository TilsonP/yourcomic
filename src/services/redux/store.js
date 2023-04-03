import { configureStore } from "@reduxjs/toolkit";
import comicReducer from "./comicSlice"

export const store = configureStore({
    reducer:{
        comic: comicReducer,
    },
})