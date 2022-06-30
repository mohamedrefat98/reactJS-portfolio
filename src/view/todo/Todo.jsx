import React from 'react'
import TodoForm from "../../compnents/todo/TodoForm";
import TodoList from "../../compnents/todo/TodoList";
import './Todo.css';


function Todo() {

 
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
