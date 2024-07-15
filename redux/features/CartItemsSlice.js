import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie"

const initialState = {
    cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart")) : { cartItems: [] }
}

const CartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newItem = action.payload
            const existItem = state.cart?.cartItems?.find(
                (item) => item.title === newItem.title
            )
            const cartItems = existItem
                ? state.cart?.cartItems?.map((item) =>
                    item.title === existItem.title ? newItem : item
                )
                : [...state.cart.cartItems, newItem]
            Cookie.set("cart", JSON.stringify({ ...state.cart, cartItems }))
            return {
                ...state, cart: { ...state.cart, cartItems }
            }
        },
        remCartItem: (state, action) => {
            const cartItems = state.cart.cartItems?.filter(
                (item) => item.title !== action.payload.title
            )
            Cookie.set("cart", JSON.stringify({ ...state.cart, cartItems }))
            return {
                ...state, cart: { ...state.cart, cartItems }
            }
        },
        remAllCartItems: (state) => {
            Cookie.remove("cart")
            Cookie.r
            return {
                cart: { cartItems: [] }
            }
        },
    },
});

export default CartItemsSlice.reducer;

export const selectCartItems = (store) => store.cartItems.cart;

export const { addCartItem, remCartItem, remAllCartItems } = CartItemsSlice.actions;
