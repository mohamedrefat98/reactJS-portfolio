import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState ={
    count : 0
}

//slice for todo-list component 
export const counterSlice = createSlice({
    name : 'count',
    initialState,
    reducers:{
        increase: (state) => {
            state.count +=1;
          },
          decrease: (state) => {
            state.count-=1;
          }
    }
}) ;

export default counterSlice.reducer;
export const {increase,decrease} = counterSlice.actions;
