import React, { Component } from 'react';

import './TodoListItem.css'


export default class TodoListItem extends Component {
  state = {
    important: false,
    done: false
  };

  onLabelClick = () => {
    this.setState((state) => {
      return { done: !state.done };
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return { important: !state.important };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';

    if (done) classNames += ' done';
    if (important) classNames += ' important';

    return (
      <div className={classNames}>
        <span
          onClick={this.onLabelClick}
          className="todo-list-item-label"
        >{ label }</span>

        <button
          onClick={this.onMarkImportant}
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
