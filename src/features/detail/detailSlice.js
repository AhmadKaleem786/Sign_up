import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FirstName:'',
    LastName:'',
    Mobile:'',
    Position:'',
    AccountType:'',
    CompanyName:'',
    CompanyABN:'',
    Industry: '',
    Other: '',
    CompanyNumber: '',
    Address1: '',
    Address2: '',
    PostCode: '',
    City: '',
    State: '',
    Country: '',
    statuscheck: false,
    paging:false
}

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{
        handleSubmit: (state) =>{
            state.FirstName = document.getElementById("first_name").value;
            state.LastName = document.getElementById("last_name").value;
            state.Mobile = document.getElementById("mobile_number").value;
            state.Position = document.getElementById("position").value;
            state.AccountType = document.getElementById("account_type").value;
            state.CompanyName = document.getElementById("company_name").value;
            state.CompanyABN = document.getElementById("company_abn").value;
            state.Industry = document.getElementById("industry").value;
            state.Other = document.getElementById("other").value;
            state.CompanyNumber = document.getElementById("company_phone_number").value;
            state.Address1 = document.getElementById("company_address_1").value;
            state.Address2 = document.getElementById("company_address_2").value;
            state.PostCode = document.getElementById("postcode").value;
            state.City = document.getElementById("city").value;
            state.State = document.getElementById("states").value;
            state.Country = document.getElementById("country").value;

            if ((state.FirstName == '') || (state.LastName == '') || (state.Mobile == '') ||
            (state.Position == '') || (state.AccountType == '') || (state.CompanyName == '') ||
            (state.CompanyABN == '') || (state.Industry == '') || ((state.Industry == 'Other')?(state.Other == ''):false) ||
            (state.CompanyNumber == '') || (state.Address1 == '') || (state.Address2 == '') ||
            (state.PostCode == '') || (state.City == '') || (state.State == '') || (state.Country == '')){
                state.statuscheck = true;
            }
            else{
                state.statuscheck = false;
                state.paging = true;
            }
        },
        handleOk: (state)=>{
            state.statuscheck = false;
        },
        handleNo: (state)=>{
            state.paging = false;
        }
    }
})

export const { handleSubmit, handleOk, handleNo } = detailSlice.actions;
export default detailSlice.reducer;