import React from 'react';

export const TodoFilter = ({ sortList }) => {
  return (
    <div className="todo-filter-container">
      <label>
        <span>Sort by:</span>
        <select name="filter" onChange={(e) => sortList(e)}>
          <option value="" selected disabled>
            Select
          </option>
          <option value="done-first">Done todos first</option>
          <option value="done-last">Done todos last</option>
        </select>
      </label>
    </div>
  );
};
