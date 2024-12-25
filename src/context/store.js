import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slices/CartSlice';
import SearchBarTermReducer from './slices/SearchBarTermSlice';

const store = configureStore({
  reducer: {
    cart : CartReducer ,
    searchTerm : SearchBarTermReducer
  },
});

export default store;
