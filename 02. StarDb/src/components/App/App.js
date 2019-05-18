import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../swComponents';


import Row from '../Row';

import './App.css';


export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 1
  };

  render() {
    const personDetails = <PersonDetails itemId={ 11 } />;
    const planetDetails = <PlanetDetails itemId={ 5 } />;
    const starshipDetails = <StarshipDetails itemId = { 15 } />

    const peopleList = <PersonList />;
    const starshipList = <StarshipList />;
    const planetList = <PlanetList />;

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}

        <Row left={ peopleList } right={ personDetails } />
        <Row left={ planetList } right={ planetDetails } />
        <Row left={ starshipList } right={ starshipDetails } />
      </div>
    );
  };
};
