import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./CounterReducer"

const store = configureStore({
    reducer:{
        Counter:CounterReducer
    }
})


export default store