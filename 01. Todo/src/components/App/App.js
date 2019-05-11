import React, { Component } from 'react';

import './App.css'

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemsStatusFilter';
import TodoList from '../TodoList';
import AddForm from '../AddForm';


export default class App extends Component {
  itemId = 0;

  state = {
    todoData: [
      this.createTodoItem('Learn React.js'),
      this.createTodoItem('Create awesome app')
    ]
  };

  toggleProperty(arr, id, propName) {
    return arr.map((item) => {
      if (item.id === id) item[propName] = !item[propName];
      return item;
    })
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: ++this.itemId
    };
  };

  addItem = (message) => {
    const item = this.createTodoItem(message);

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

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddForm onItemAdded={this.addItem} />
      </div>
    );
  };
};
