import React, { Component } from 'react';

import './SearchPanel.css'


export default class SearchPanel extends Component {
  state = {
    searchText: ''
  };

  onSearchChange = (e) => {
    const searchText = e.target.value;

    this.setState({ searchText  });
    this.props.onSearchChange(searchText)
  };

  render() {
    return <input
      onChange={this.onSearchChange}
      value={this.state.searchText}
      type="text"
      className="form-control search-input"
      placeholder="type to search"
    />;
  };
};
