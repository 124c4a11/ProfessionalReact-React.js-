import React from 'react';

import TodoListItem from './TodoListItem'


export default ({ todos }) => {
  const items = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={item.id} className="list-group-item todo-list-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group">{items}</ul>;
};
