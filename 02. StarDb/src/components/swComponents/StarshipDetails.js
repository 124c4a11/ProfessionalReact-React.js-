import React from 'react';

import { withSwapiService } from '../hocHelpers';

import ItemDetails, { Record } from '../ItemDetails';


const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;

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


export default withSwapiService(StarshipDetails);
