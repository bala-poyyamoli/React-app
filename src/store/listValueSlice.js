import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    value: []
}

export const listValueSlice = createSlice({
    name: 'listValue',
    initialState,
    reducers: {
        setListValue: (state,val) => {
            console.log();
            state.value.push(val.payload)
        }
    }
})

export const { setListValue } = listValueSlice.actions
export default listValueSlice.reducer