import React from 'react';

import TodoListItem from './TodoListItem'


export default ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const items = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item todo-list-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group">{items}</ul>;
};
