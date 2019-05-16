import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import Row from '../Row';


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

    const itemList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData={ this.swapiService.getAllPeople }
        renderItem={ ({ name, gender, birthYear }) => (
          `${name} (${gender} ${birthYear})`
        ) }
      />
    );

    const personDetails = (
      <PersonDetails personId={ this.state.selectedPersonId } />
    );

    return <Row left={ itemList } right={ personDetails } />;
  };
};
