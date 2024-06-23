import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [false]
}

export const showTextList = createSlice({
    name: 'showText',
    initialState,
    reducers: {
        setShowText: (state,e) =>{
            state.value = [...e.payload]
        }
    }
})

export const { setShowText } = showTextList.actions
export default showTextList.reducer