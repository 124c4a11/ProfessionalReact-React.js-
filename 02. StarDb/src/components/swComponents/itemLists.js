import React from 'react';

import ItemList from '../ItemList';
import { withData, withSwapiService } from '../hocHelpers';


const withChildFunction = (fn) => (Wrapped) => {
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


export const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);


export const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);


export const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildFunction(renderModelAndName)(ItemList))
);
