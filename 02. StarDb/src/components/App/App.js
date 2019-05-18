import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import DummySwapiService from '../../services/DummySwapiService';
import { StarshipDetails } from '../swComponents';

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
      <ErrorBoundry>
          <SwapiServiceProvider value={ this.state.swapiService }>
            <Router>
              <div className="container">
                <Header onServiceChange={ this.onServiceChange } />
                <RandomPlanet />

                <Route
                  path="/"
                  exact
                  render={ () => <h2>Welcome to StarDb</h2> }
                />
                <Route path="/people" component={ PeoplePage } />
                <Route path="/planets" component={ PlanetsPage } />
                <Route path="/starships" exact component={ StarshipsPage } />
                <Route
                  path="/starships/:id"
                  render={
                    ({ match }) => <StarshipDetails itemId={ match.params.id } />
                  }
                />
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
    );
  };
};
