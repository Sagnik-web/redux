import {createReducer} from '@reduxjs/toolkit'

const initialState ={
    c:0
}

export const customReducer = createReducer(initialState,{
    increment: (state,action) =>{
       state.c += 1 
    },

    decrement:(state)=>{
        state.c -=1
    }
})
