import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pemail:'',
    pname: '',
    pcountry:'',
    paddress:'',
    pcard: '',
    pexpiry:'',
    pcvc:'',
    pmessage:'',
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers:{
        handlenext: (state)=>{
            state.pemail = document.getElementById("cus_email").value;
            state.pname = document.getElementById("cus_name").value;
            state.pcountry = document.getElementById("cus_country").value;
            state.paddress = document.getElementById("cus_address1").value;
            state.pcard = document.getElementById("cus_card").value;
            state.pexpiry = document.getElementById("cus_expiry").value;
            state.pcvc = document.getElementById("cus_cvc").value;
            state.pmessage = '';
        },
        handlepmesaage: (state)=>{
            state.pmessage = "Please enter all the required fields!"
        },
        handlepreset: (state)=>{
            document.getElementById("cus_email").value = '';
            document.getElementById("cus_name").value = '';
            document.getElementById("cus_country").value = '';
            document.getElementById("cus_address1").value = '';
            document.getElementById("cus_card").value = '';
            document.getElementById("cus_expiry").value = '';
            document.getElementById("cus_cvc").value = '';
            state.pmessage = '';
        }
    }
})

export const {handlenext, handlepmesaage, handlepreset} = paymentSlice.actions;
export default paymentSlice.reducer;