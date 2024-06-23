import { configureStore } from '@reduxjs/toolkit'
import inputSlice from './store/inputSlice'
import listValueSlice from './store/listValueSlice'
import showTextList from './store/showTextList'

export const store = configureStore({
    reducer: {
        inputList: inputSlice,
        listValue: listValueSlice,
        showText: showTextList
    }
    
})