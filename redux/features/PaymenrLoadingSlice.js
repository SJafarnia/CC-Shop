import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

const paymentLoadingSlice = createSlice({
    name: 'PaymentLoadingSlice',
    initialState,
    reducers: {
        setPaymentLoadingState: (state, action) => {
            state.loading = action.payload
        }
    },
});

export default paymentLoadingSlice.reducer;

export const selectPaymentLoadingSlice = (store) => store.paymentLoading.loading;

export const { setPaymentLoadingState } = paymentLoadingSlice.actions;
