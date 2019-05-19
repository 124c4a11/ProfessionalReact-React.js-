import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../Pages';
import ShopHeader from '../ShopHeader';

import './App.css';


const App = () => {
  return (
    <Fragment>
      <ShopHeader numberItems={ 5 } total={ 210 } />
      <main className="container" role="main">
        <Switch>
          <Route to="/" exact component={ HomePage } />
          <Route to="/cart" component={ CartPage } />
        </Switch>
      </main>
    </Fragment>
  );
};


export default App;
