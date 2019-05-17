import React from 'react';

import SwapiService from '../../services/SwapiService';

import ItemDetails, { Record } from '../ItemDetails';


const swapiService = new SwapiService();


const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;


export const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={ itemId }
      getData={ getPerson }
      getImageUrl={ getPersonImage }
    >
      <Record label="Gender" field="gender" />
      <Record label="Eye Color" field="eyeColor" />
    </ItemDetails>
  );
};


export const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={ itemId }
      getData={ getPlanet }
      getImageUrl={ getPlanetImage }
    >
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};


export const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={ itemId }
      getData={ getStarship }
      getImageUrl={ getStarshipImage }
    >
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};
