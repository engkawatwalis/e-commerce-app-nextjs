import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import deviceSlice from './device-slice';


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        device: deviceSlice.reducer
    },
});

export default store;