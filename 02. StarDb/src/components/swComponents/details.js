import React from 'react';

import { SwapiServiceConsumer } from '../swapiServiceContext';

import ItemDetails, { Record } from '../ItemDetails';


export const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};


export const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};


export const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};
