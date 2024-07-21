import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers :{
        incrementar: (state) => {state.value += 1},
        decrementar: (state) => {state.value -= 1}
    }
})


export const {incrementar, decrementar} = counterSlice.actions
export default counterSlice.reducer