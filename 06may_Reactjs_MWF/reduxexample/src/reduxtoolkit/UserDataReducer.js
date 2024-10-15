import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const UserDataReducer = createSlice({
    name:"Users",
    initialState:{
        data:[]
    },
    reducers:{
        add:(state,action)=>{
            console.log("udata is "+action.payload);
            
            // state.data = [
            //     ...state.data,
            //     action.payload
            // ]
            // state.data.push(udata)
        },
        deleteuser:(state,action)=>{
            state.data = state.data.filter((i)=>{
                return i.id!=action.payload
            })
        },
        updateUser:(state,action)=>{
                state.data = state.data.map((i)=>{
                        if(i.id == action.payload.id){
                            i.name = action.payload.name
                            i.age = action.payload.age
                        }
                    return i;
                })
        }
    }
})
export const {add,deleteuser,updateUser} = UserDataReducer.actions
export default UserDataReducer.reducer
