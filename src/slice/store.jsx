import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice'
import cartsReducer from './cartsSlice'
import storesReducer from './storeSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products:productsReducer,
    carts:cartsReducer,
    stores:storesReducer
  }
});

export default store;
