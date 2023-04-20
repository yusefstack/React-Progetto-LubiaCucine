import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    totalItems: 0,
    totalPrice: 0
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsList: (state, action) => {
            state.products = action.payload
        },
        addElementToCart: (state, action) => {
            const product = state.products.find(product => product.id === action.payload)
            if (state.cart.find(product => product.id === action.payload)) {
                return
            }
            state.cart.push(product)
            state.totalItems = state.cart.length
            state.totalPrice += product.price
            state.totalPrice = +state.totalPrice.toFixed(5)
        },
        deleteElementInCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload)
            const product = state.products.find(product => product.id === action.payload)
            state.totalPrice -= product.price
            state.totalPrice = +state.totalPrice.toFixed(5)
            state.totalItems = state.cart.length
        }
    }
});

export default productsSlice.reducer;

export const { addProductsList, addElementToCart, deleteElementInCart } = productsSlice.actions;