import React, { useState } from 'react';
import './App.css';
import todo from './store/todo';
import { observer } from "mobx-react-lite";

const Todo = () => {
  const [newTodo, setNewTodo] = useState({id:(todo.total+1), title:'', completed: false});
  console.log(newTodo);

  const handleChange = (e) => {
    setNewTodo(prev => ({
      ...prev,
      ...({id:(todo.total+1), title:e.target.value, completed: false}),
    }));
  };

  const handleAddNewTodo = () => {
    todo.addTodo(newTodo);
    setNewTodo(prev => ({
      ...prev,
      ...({id:(todo.total+1), title:'', completed: false}),
    }));
  }

  return (
    <div className='counter'>
      <input type="text" onChange={handleChange} value={newTodo.title}/>
      <button onClick={handleAddNewTodo}>Добавить</button>
      <button onClick={()=>todo.fetchTodos()}>Загрузить Список</button>
      {
        todo.todos.map(t =>
          <div key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={()=>todo.completeTodo(t.id)} />
            {t.title}
            <button onClick={()=> todo.removeTodo(t.id)}>remove</button>
          </div>
        )
      }
    </div>
  );

};

export default observer(Todo);