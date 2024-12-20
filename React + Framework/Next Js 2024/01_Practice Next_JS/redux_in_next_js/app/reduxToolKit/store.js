import { configureStore } from "@reduxjs/toolkit";

import slice from "./slice1"

import todoSlice from "./slice2"


export const store =configureStore({
    reducer:{
        UserSlice: slice,
        TodoSlice: todoSlice
        

        
    }
})