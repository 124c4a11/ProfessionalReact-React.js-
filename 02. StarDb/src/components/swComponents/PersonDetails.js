import React from 'react';

import { withSwapiService } from '../hocHelpers';

import ItemDetails, { Record } from '../ItemDetails';


const PersonDetails = (props) => {
  return (
    <ItemDetails { ...props } >
      <Record label="Gender" field="gender" />
      <Record label="Eye Color" field="eyeColor" />
    </ItemDetails>
  );
};


const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};


export default withSwapiService(PersonDetails, mapMethodsToProps);
