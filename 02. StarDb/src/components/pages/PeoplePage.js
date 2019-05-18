import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonDetails, PersonList } from '../swComponents';
import Row from '../Row';


const PeoplePage = ({ match,  history }) => {
  return (
    <Row
      left={ <PersonList onItemSelected={ (id) => history.push(id) } /> }
      right={ <PersonDetails itemId={ match.params.id || 1 } /> }
    />
  );
};


export default withRouter(PeoplePage);
