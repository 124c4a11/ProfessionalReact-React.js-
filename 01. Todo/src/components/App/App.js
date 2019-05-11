import React, { Component } from 'react';

import './App.css'

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemsStatusFilter';
import TodoList from '../TodoList';
import AddForm from '../AddForm';


export default class App extends Component {
  state = {
    todoData: [
      { id: 1, label: 'Learn React.js', important: false },
      { id: 2, label: 'Create awesome app', important: true }
    ]
  };

  addItem = (message) => {
    const item = {
      label: message,
      important: false,
      id: Date.now()
    };

    this.setState(({ todoData }) => {
      return {
        todoData: [ ...todoData, item ]
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.id !== id)
      };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
        />
        <AddForm onItemAdded={this.addItem} />
      </div>
    );
  };
};
