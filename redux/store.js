import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./features/CartItemsSlice"
import searchLoadingSlice from "./features/SearchLoadingSlice"

const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
        searchLoading: searchLoadingSlice,
    },
});

export default store;