import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    itemCount: 0,
    loading: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) existing.quantity += action.payload.quantity;
            else state.items.push(action.payload);
            state.itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) item.quantity = quantity;
            state.itemCount = state.items.reduce((acc, i) => acc + i.quantity, 0);
            state.total = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            state.itemCount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
