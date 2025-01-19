import { createSlice } from '@reduxjs/toolkit';

const cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items = state.items.filter(item=>item.name!==action.payload.name);
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
        
    }
})

export const {addItem, removeItem, clearCart} = cartslice.actions;

export default cartslice.reducer;