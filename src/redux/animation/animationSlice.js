import {createSlice} from "@reduxjs/toolkit";

const animationSlice= createSlice({
    name:'animation',
    initialState:{
        idle:null,
        scissor: null,
        paper: null,
        rock: null,
        player: null,
    },
    reducers:{
        setPlayer:(state,action)=>{
            state.player= action.payload;
        }
    }
})

export const {setPlayer} = animationSlice.actions;
export default animationSlice.reducer;
