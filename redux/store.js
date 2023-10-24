import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./features/CartItemsSlice"
import searchLoadingSlice from "./features/SearchLoadingSlice"
import paymentLoadingSlice from "./features/PaymenrLoadingSlice"

const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
        searchLoading: searchLoadingSlice,
        paymentLoading: paymentLoadingSlice,
    },
});

export default store;