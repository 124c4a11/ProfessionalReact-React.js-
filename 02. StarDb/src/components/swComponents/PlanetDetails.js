import React from 'react';

import { withSwapiService } from '../hocHelpers';

import ItemDetails, { Record } from '../ItemDetails';


const PlanetDetails = (props) => {
  return (
    <ItemDetails { ...props } >
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};


const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};


export default withSwapiService(mapMethodsToProps)(PlanetDetails);
