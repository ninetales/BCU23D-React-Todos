import React from 'react';
import { Plus } from 'iconoir-react';

export const TodoForm = ({ addItem }) => {
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todo = formData.get('todo');

    addItem(todo);
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => formHandler(e)} className="todo-form">
      <input type="text" placeholder="New task" name="todo" />
      <button>
        <Plus />
      </button>
    </form>
  );
};
