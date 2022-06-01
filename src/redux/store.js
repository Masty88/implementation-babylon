import { configureStore } from '@reduxjs/toolkit';
import animationReducer from './animation/animationSlice'

export const store= configureStore({
    reducer:{
        animation:  animationReducer
    }
})
