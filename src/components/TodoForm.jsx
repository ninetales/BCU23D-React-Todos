import React from 'react';

export const TodoForm = ({ addItem }) => {
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todo = formData.get('todo');
    console.log('send form!', todo);
    addItem(todo);
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => formHandler(e)}>
      <input type="text" placeholder="Todo" name="todo" />
      <button>Add Todo</button>
    </form>
  );
};
