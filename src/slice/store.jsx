import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice'
import cartsReducer from './cartsSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products:productsReducer,
    carts:cartsReducer
  }
});

export default store;
