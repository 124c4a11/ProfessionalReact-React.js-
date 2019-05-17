import SwapiService from '../../services/SwapiService';

import ItemList from '../ItemList';
import { withData } from '../hocHelpers';


const swapiService = new SwapiService();


const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;


export const PersonList = withData(ItemList, getAllPeople);


export const PlanetList = withData(ItemList, getAllPlanets);


export const StarshipList = withData(ItemList, getAllStarships);
