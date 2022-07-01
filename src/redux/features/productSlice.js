import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const baseUrl = "https://fakestoreapi.com";

export const getProduct = createAsyncThunk('product/getProduct',(id)=>{
    return fetch(`${baseUrl}/products/${id}`)
    .then((res)=>res.json())
    .then((json)=>json)
    .catch((err)=>{console.log(err);})
});

const initialState = {
    product : {},
    loading : false,
    err : {}
}

const productSlice = createSlice({
    name : 'shop',
    initialState,
    extraReducers:{
        [getProduct.pending] : (state) => {
            //pending 
            state.loading=true;
        },
        [getProduct.fulfilled] : (state,action) => {
            //fullfilled
            state.product = action.payload;
            state.loading=false;
        },
        [getProduct.rejected] : (state,action) => {
            //rejected
            state.err = action.payload;
            state.loading = false ;
        }
    }
})

export default productSlice.reducer;