import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodoAction } from "./../../redux";
import { useSelector } from 'react-redux'

const TodoList = () => {

  const todos = useSelector(state=>state.todos);


  const dispatch = useDispatch();
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i} className="w-75 mx-auto ">
            <li className="border d-flex align-items-center justify-content-between px-5">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
            </div>
            <button className='btn btn-danger' onClick={()=>{dispatch(deleteTodoAction(i))}}>X</button>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
