import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';

import Row from '../Row';
import ItemDetails, { Record } from '../ItemDetails';

import './App.css';


export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 1
  };

  render() {
    const {
      getPerson,
      getAllPeople,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={ 11 }
        getData={ getPerson }
        getImageUrl={ getPersonImage }
      >
        <Record label="Gender" field="gender" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={ 5 }
        getData={ getStarship }
        getImageUrl={ getStarshipImage }
      >
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
      </ItemDetails>
    );

    const peopleList = (
      <ItemList
        getData={getAllPeople}
        onItemSelected={() => {}}
      >
        { ({name}) => <span>{name}</span> }
      </ItemList>
    )

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}

        <Row left={ peopleList } right={ starshipDetails } />
      </div>
    );
  };
};
