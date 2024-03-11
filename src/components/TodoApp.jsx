import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { useEffect } from 'react';
import { getDummyData } from '../services/todoService';
import { Item } from '../models/Item';

export const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    if (todos.length === 0) {
      (async () => {
        localStorage.setItem('todos', JSON.stringify(await getDummyData()));
        setTodos(JSON.parse(localStorage.getItem('todos')));
      })();
    }
  });

  const checkItem = (id) => {
    const objectToUpdate = todos.find((obj) => obj._id === id);
    objectToUpdate.done = objectToUpdate.done ? false : true;
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem('todos')));
  };

  const addItem = (task) => {
    localStorage.setItem('todos', JSON.stringify([...todos, new Item(task)]));
    setTodos(JSON.parse(localStorage.getItem('todos')));
  };

  const removeItem = (id) => {
    const remainingItems = todos.filter((item) => item._id !== id);
    localStorage.setItem('todos', JSON.stringify(remainingItems));
    setTodos(JSON.parse(localStorage.getItem('todos')));
  };

  return (
    <div>
      {todos.length === 0 ? (
        <span>Loading ToDo...</span>
      ) : (
        <>
          <TodoForm addItem={addItem} />
          <TodoList
            listItems={todos}
            checkItem={checkItem}
            removeItem={removeItem}
          />
        </>
      )}
    </div>
  );
};
