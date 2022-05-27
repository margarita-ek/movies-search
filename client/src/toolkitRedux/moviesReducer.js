import { createReducer } from "@reduxjs/toolkit"
import { fetch, success, err } from "./actions"

const initialState = {
    loader: false,
    movies: []
}

export default createReducer(initialState, {
    [fetch]: function (state) { 
        state.loader = true
    },
    [success]: function (state, action) {
        state.loader = false        
        state.movies = action.payload
    },
    [err]: function (state) { 
        state.loader = false
    }
})