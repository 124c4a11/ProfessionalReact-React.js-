import React, { Component } from 'react';

import './TodoListItem.css'


export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props;

    let classNames = 'todo-list-item';

    if (done) classNames += ' done';
    if (important) classNames += ' important';

    return (
      <div className={classNames}>
        <span
          onClick={onToggleDone}
          className="todo-list-item-label"
        >{ label }</span>

        <button
          onClick={onToggleImportant}
          type="button"
          className="todo-list-item-btn btn btn-outline-success btn-sm float-right"
        ><i className="fa fa-exclamation" /></button>

        <button
          onClick={onDeleted}
          type="button"
          className="todo-list-item-btn btn btn-outline-danger btn-sm float-right"
        ><i className="fa fa-trash-o" /></button>
      </div>
    );
  };
}
