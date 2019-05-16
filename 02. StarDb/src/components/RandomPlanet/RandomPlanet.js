import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spiner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.css';


export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    loading: true,
    error: false,
    planet: {}
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 15000);
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      loading: false,
      planet
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17 + 2);

    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { loading, error, planet } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spiner = loading ? <Spiner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet d-flex flex-wrap jumbotron rounded">
        { errorMessage }
        { spiner }
        { content }
      </div>
    );
  };
};


const PlanetView = ({ planet }) => {
  const {
    id,
    name,
    population,
    rotationPeriod,
    diameter
  } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
      />
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
