"use client"
import {configureStore} from '@reduxjs/toolkit'
import moviesSliceReducers  from '../slices/moviesSlice'

export const store = () => {
    return configureStore({
        reducer: {
             movies: moviesSliceReducers
        }
    })
}



