import React from 'react';
import { Trash } from 'iconoir-react';

export const TodoItem = ({ itemData, checkItem, removeItem }) => {
  return (
    <li className={itemData.done ? 'item-completed' : ''}>
      <input
        type="checkbox"
        onChange={() => checkItem(itemData._id)}
        checked={itemData.done}
      />
      <p>{itemData.task}</p>
      <button onClick={() => removeItem(itemData._id)}>
        <Trash />
      </button>
    </li>
  );
};
