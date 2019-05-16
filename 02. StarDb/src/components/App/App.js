import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';

import './App.css';


export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 1
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  };
};
