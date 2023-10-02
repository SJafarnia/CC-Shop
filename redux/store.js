import { configureStore } from "@reduxjs/toolkit";

import cartItemsSlice from "./features/CartItemsSlice"

const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
    },
})

export default store