import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const baseUrl = "https://fakestoreapi.com";

export const getProducts = createAsyncThunk('shop/getProducts',()=>{
    return fetch(`${baseUrl}/products`)
    .then((res)=>res.json())
    .then((json)=>json)
    .catch((err)=>{console.log(err);})
});

const initialState = {
    products : [],
    loading : false,
    err : {}
}

const shopSlice = createSlice({
    name : 'shop',
    initialState,
    extraReducers:{
        [getProducts.pending] : (state) => {
            //pending 
            state.loading=true;
        },
        [getProducts.fulfilled] : (state,action) => {
            //fullfilled
            state.products = action.payload;
            state.loading=false;
        },
        [getProducts.rejected] : (state,action) => {
            //rejected
            state.err = action.payload;
            state.loading = false ;
        }
    }
})

export default shopSlice.reducer;