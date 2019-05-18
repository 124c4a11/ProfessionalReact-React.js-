import React from 'react';

import { withSwapiService } from '../hocHelpers';

import ItemDetails, { Record } from '../ItemDetails';


const StarshipDetails = (props) => {
  return (
    <ItemDetails { ...props } >
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};


const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};


export default withSwapiService(StarshipDetails, mapMethodsToProps);
