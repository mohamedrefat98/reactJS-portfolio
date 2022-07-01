import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteTodo } from '../../redux/features/todoSlice';

const TodoList = () => {

  const todos = useSelector(state=>state.persistedTodoReducer.todos);


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
            <button className='btn btn-danger' onClick={()=>{dispatch(deleteTodo(i))}}>X</button>
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
