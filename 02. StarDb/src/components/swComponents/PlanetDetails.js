import React from 'react';

import { withSwapiService } from '../hocHelpers';

import ItemDetails, { Record } from '../ItemDetails';


const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;

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


export default withSwapiService(PlanetDetails);
