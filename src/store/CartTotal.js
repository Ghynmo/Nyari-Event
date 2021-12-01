import { createSlice } from "@reduxjs/toolkit"

const initialCart = []

export const CartSum = createSlice({
    name: "CartSummary",
    initialState:{ 
        CartSummary: initialCart
    },
    reducers: {
        TotalCart: (state, action) => {
            
            state.CartSummary = action.payload
        }
    },
})
export const { TotalCart } = CartSum.actions

export default CartSum.reducer