import React from 'react';

import { withSwapiService } from '../hocHelpers';

import ItemDetails, { Record } from '../ItemDetails';


const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

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


export default withSwapiService(PersonDetails);
