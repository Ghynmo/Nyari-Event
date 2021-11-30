import { createSlice } from "@reduxjs/toolkit"

const initialCart = []

export const CartCount = createSlice({
    name: "CartCounter",
    initialState:{ 
        CartCounter: initialCart
    },
    reducers: {
        CountingCart: (state, action) => {
            console.log('action', action.payload);
            const name = action.payload[0]
            const count = action.payload[1]
            state.CartCounter = {...state.CartCounter, [name]:count}
        }
    },
})
export const { CountingCart } = CartCount.actions

export default CartCount.reducer