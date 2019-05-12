import React, { Component } from 'react';

import './AddForm.css';


export default class AddForm extends Component {
  state = { label: '' };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onItemAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="add-form d-flex">
        <input
          value={this.state.label}
          onChange={this.onLabelChange}
          type="text"
          className="form-control"
          placeholder="What needs to be done"
        />
        <button
          className="btn btn-outline-secondary flex-shrink-0 ml-1"
        >Add Item</button>
      </form>
    );
  };
};
