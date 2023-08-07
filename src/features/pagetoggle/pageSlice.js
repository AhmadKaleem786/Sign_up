import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page1: true,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers:{
        page22: (state)=>{
            state.page1 = false;
            state.page2 = true;
        },
        page33: (state)=>{
            state.page2 = false;
            state.page3 = true;
        },
        page44: (state)=>{
            state.page3 = false;
            state.page4 = true;
        },
        page55: (state)=>{
            state.page4 = false;
            state.page5 = true;
        }
    }
})

export const { page22, page33, page44, page55} = pageSlice.actions;
export default pageSlice.reducer;