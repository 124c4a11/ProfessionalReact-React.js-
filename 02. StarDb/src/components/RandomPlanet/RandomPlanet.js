import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';


export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet d-flex flex-wrap jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/4.jpg`} alt=""/>
        <div>
          <h4>name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>population</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>rotationPeriod</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>diameter</span>
            </li>
          </ul>
        </div>
      </div>

    );
  };
};
