import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';


export default class App extends Component {
  state = {
    selectedPersonId: null
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPersonId: id });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <div className="row">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6 mt-sm-4 mt-md-0">
            <PersonDetails personId={this.state.selectedPersonId} />
          </div>
        </div>
      </div>
    );
  };
};
