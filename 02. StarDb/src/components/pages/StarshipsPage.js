import React, { Component } from 'react';

import { StarshipDetails, StarshipList } from '../swComponents';
import Row from '../Row';


export default class StarshipsPage extends Component {
  state = {
    selectedItem: 15
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={ <StarshipList onItemSelected={ this.onItemSelected } /> }
        right={ <StarshipDetails itemId={ selectedItem } /> }
      />
    );
  };
};
