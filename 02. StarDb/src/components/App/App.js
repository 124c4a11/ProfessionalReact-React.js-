import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Row from '../Row';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../swComponents';

import './App.css';


export default class App extends Component {
  state = {
    selectedPersonId: 1,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService
        : SwapiService;

      return {
        swapiService: new Service()
      };
    });
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
        <SwapiServiceProvider value={ this.state.swapiService }>
          <Header onServiceChange={ this.onServiceChange } />
          <RandomPlanet />

          <Row left={ peopleList } right={ personDetails } />
          <Row left={ planetList } right={ planetDetails } />
          <Row left={ starshipList } right={ starshipDetails } />
        </SwapiServiceProvider>
      </div>
    );
  };
};
