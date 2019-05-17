import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 1,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPersonId: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData={ this.swapiService.getAllPeople }
      >
        { (i) => (
          `${i.name} (${i.birthYear})`
        ) }
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails personId={ this.state.selectedPersonId } />
    );

    return (
      <ErrorBoundry>
        <Row left={ itemList } right={ itemDetails } />
      </ErrorBoundry>
    );
  };
};
