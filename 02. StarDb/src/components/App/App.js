import React from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';


const App = () => {
  return (
    <div className="container">
      <Header />
      <RandomPlanet />

      <div className="row">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6 mt-sm-4 mt-md-0">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};


export default App;
