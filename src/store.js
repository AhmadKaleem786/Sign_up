import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./features/detail/detailSlice";
import pageReducer from "./features/pagetoggle/pageSlice";
import yourCompanyReducer from "./features/yourCompany/yourCompanySlice";
import paymentReducer from "./features/payment/paymentSlice";

export const store = configureStore({
    reducer: {
        detail: detailReducer,
        page: pageReducer,
        yourcompany: yourCompanyReducer,
        payment: paymentReducer,
    }
})