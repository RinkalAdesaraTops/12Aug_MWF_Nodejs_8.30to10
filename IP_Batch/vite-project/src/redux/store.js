import { configureStore } from "@reduxjs/toolkit";
import CounterReducers from "./CounterReducers";

export const store = configureStore({
    reducer:{
        "counter":CounterReducers
    }
})