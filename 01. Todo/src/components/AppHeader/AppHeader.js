import React from 'react';

import './AppHeader.css'


export default ({ toDo, done }) => {
  return (
    <header className="app-header d-flex">
      <h1 className="app-header-title">Todo List</h1>
      <h2 className="app-header-subtitle">{ toDo } more to do, { done } done</h2>
    </header>
  );
};
