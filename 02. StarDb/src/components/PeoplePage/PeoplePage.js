import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 1,
    hasError: false
  };

  componentDidCatch() {
    this.setsState({ hasError: true });
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPersonId: id });
  };

  render() {
    if (this.state.hasError) return <ErrorIndicator />

    return (
      <div className="row">
        <div className="col-md-6">
          <ItemList onItemSelected={ this.onPersonSelected } />
        </div>
        <div className="col-md-6 mt-sm-4 mt-md-0">
          <PersonDetails personId={ this.state.selectedPersonId } />
        </div>
      </div>
    );
  };
};
