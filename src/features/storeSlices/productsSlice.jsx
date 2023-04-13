import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsList: (state, action) => {
            state.products = action.payload
        }
    }
});

export default productsSlice.reducer;

export const { addProductsList } = productsSlice.actions;