import {configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'
import counterReducer from './features/counterSlice';
import shopReducer from './features/shopSlice'
import productReducer from "./features/productSlice";

// persist configs to save data
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);



/***********************************************************************/

export const store = configureStore({
    reducer:{
        persistedTodoReducer,
        counterReducer,
        shopReducer,
        productReducer
    },
    // middleware: [thunk]
}) ;

export const persistor = persistStore(store)