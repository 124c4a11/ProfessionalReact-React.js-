import React, { Component } from 'react';

import './AddForm.css';


export default class AddForm extends Component {
  render() {
    return (
      <div className="add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Add Item')}
        >Add Item</button>
      </div>
    );
  };
};
