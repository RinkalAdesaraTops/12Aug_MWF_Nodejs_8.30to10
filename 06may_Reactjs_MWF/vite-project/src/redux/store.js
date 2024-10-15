import { applyMiddleware, createStore } from "redux"
import CounterReducer from "./CounterReducer"
import { thunk } from "redux-thunk"

const store =createStore(CounterReducer,applyMiddleware(thunk))

export default store