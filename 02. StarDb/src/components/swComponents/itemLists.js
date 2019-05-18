import React from 'react';

import SwapiService from '../../services/SwapiService';

import ItemList from '../ItemList';
import { withData } from '../hocHelpers';


const swapiService = new SwapiService();


const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;


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


export const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);


export const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);


export const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships
);
