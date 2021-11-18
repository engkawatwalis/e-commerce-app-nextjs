import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: [],
        totalPrice: 0,
        
    },
    reducers:{
        addProduct(state, action){

            const exisitngProduct = state.cart.find(product=>product.slug === action.payload.slug)
            if (!exisitngProduct){ 
                state.cart.push({
                slug: action.payload.slug,
                amount: action.payload.amount,
                price: action.payload.price,
                image: action.payload.image, 
                totalPrice: action.payload.price*action.payload.amount
                });
                
            } else{
                exisitngProduct.amount += action.payload.amount;
                exisitngProduct.totalPrice += action.payload.price*action.payload.amount;
            }
            state.totalPrice = state.cart.reduce((prev, curr) => {
                
                return prev + curr.totalPrice
            
            }, 0);

            localStorage.setItem('audiophile-cart', JSON.stringify(state.cart));
            localStorage.setItem('audiophile-totalPrice', JSON.stringify(state.totalPrice));
    
            
        },
        updateProduct(state, action){
            const targetProduct = state.cart.find(product=>product.slug === action.payload.slug)
            
            targetProduct.amount = action.payload.amount;
            targetProduct.totalPrice = targetProduct.price * action.payload.amount;
            
            state.totalPrice = state.cart.reduce((prev, curr) => prev + curr.totalPrice, 0);

            localStorage.setItem('audiophile-cart', JSON.stringify(state.cart));
            localStorage.setItem('audiophile-totalPrice', JSON.stringify(state.totalPrice));
        },

        removeProduct(state, action){
            state.cart = [];
            state.totalPrice=0;

            localStorage.setItem('audiophile-cart', JSON.stringify(state.cart));
            localStorage.setItem('audiophile-totalPrice', JSON.stringify(state.totalPrice));
        },

        initiateCart(state, action){
            state.cart = localStorage.getItem('audiophile-cart') ? JSON.parse(localStorage.getItem('audiophile-cart')) : [];
            state.totalPrice = localStorage.getItem('audiophile-totalPrice') ? JSON.parse(localStorage.getItem('audiophile-totalPrice')) : 0;
        }
    }
})

export const CartActions = cartSlice.actions;

export default cartSlice;