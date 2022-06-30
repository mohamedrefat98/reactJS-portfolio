import {createStore} from "redux";


const ADD_TYPE = "ADD_TODO"
const DELETE_TYPE = "DELETE_TODO"

//Actions 
export const addTodoAction =(payload) => {
    return{
        type : ADD_TYPE,
        payload : payload
    }
}

export const deleteTodoAction =(payload) => {
    return{
        type : DELETE_TYPE,
        payload :payload
    }
}


//initial state 
const initailState = {
    todos : []
}


//Reducers

export const todoReducer = (state = initailState , action) =>{
    if (action.type===ADD_TYPE){
        return{...state,todos:[...state.todos,action.payload]}
    }if(action.type===DELETE_TYPE){
        return{...state,todos:[...state.todos.filter((item,index)=>{return index !== action.payload})]}
    }
    return state;
}



export const store = createStore(
    // reducer 
    todoReducer
) ;