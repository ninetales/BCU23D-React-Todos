import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ listItems, checkItem, removeItem }) => {
  return (
    <ul className="todo-list">
      {listItems.map((item, index) => (
        <TodoItem
          key={index}
          itemData={item}
          checkItem={checkItem}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
};
