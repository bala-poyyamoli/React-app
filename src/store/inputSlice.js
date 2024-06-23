import { createSlice }  from '@reduxjs/toolkit'

const initialState = {
    value: [{CheckList: ""}]
}


export const inputSlice = createSlice({
    name: "inputList",
    initialState,
    reducers: {
        setInputList : (state) => {
            state.value.push(initialState)
        },
        removeInputList: (state,i) => {
            state.value.splice(i,1)
        }
    }
})

export const {setInputList,removeInputList} = inputSlice.actions;
export default inputSlice.reducer