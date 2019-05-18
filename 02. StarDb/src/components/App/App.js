import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import DummySwapiService from '../../services/DummySwapiService';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';

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
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={ this.state.swapiService }>
            <Header onServiceChange={ this.onServiceChange } />
            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  };
};
