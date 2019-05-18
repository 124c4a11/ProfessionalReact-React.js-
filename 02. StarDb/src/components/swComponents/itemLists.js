import React from 'react';

import ItemList from '../ItemList';
import { withData, withSwapiService } from '../hocHelpers';


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped { ...props }>
        { fn }
      </Wrapped>
    );
  };
};


const renderName = ({ name }) => <span>{ name }</span>;


const renderModelAndName = ({ name, model }) => <span>{ name } ({ model })</span>


const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};


const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};


const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};


export const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
);


export const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
);


export const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodsToProps
);
