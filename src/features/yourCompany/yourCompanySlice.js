import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    barcode:'',
    message: ''
}

const yourCompanySlice = createSlice({
    name: 'yourcompany',
    initialState,
    reducers:{
        handlebarcode:(state)=>{
            state.barcode = 'McDonalds Co Pty Ltd - ' + document.getElementById("barcode").value;
            state.message = '';
        },
        handlereset: (state)=>{
            state.barcode = '';
            state.message = '';
        },
        handlecheck:(state)=>{
            state.message = "Please confirm your Authorization to proceed!"
        },
        handlebarcheck: (state)=>{
            state.message = "Please input the Valid Barcode to proceed!"
        }
    }
})

export const {handlebarcode, handlereset, handlecheck, handlebarcheck} = yourCompanySlice.actions;
export default yourCompanySlice.reducer;