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
        },
        removeListValue: (state,val) => {
            state.value.splice(val.payload,1)
        },
        editListValue: (state,val) =>{
            state.value = [...val.payload]
        }
    }
})

export const { setListValue,editListValue,removeListValue } = listValueSlice.actions
export default listValueSlice.reducer