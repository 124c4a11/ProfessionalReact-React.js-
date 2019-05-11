import React from 'react';

import './App.css'

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemsStatusFilter';
import TodoList from '../TodoList';


export default () => {
  const todoData = [
    { id: 1, label: 'Learn React.js', important: false },
    { id: 2, label: 'Create awesome app', important: true }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};
