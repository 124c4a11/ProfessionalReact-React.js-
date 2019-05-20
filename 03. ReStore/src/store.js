import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';


const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};


const store = createStore(reducer, applyMiddleware(logMiddleware));


export default store;
