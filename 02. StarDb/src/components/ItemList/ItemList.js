import React from 'react';

import SwapiService from '../../services/SwapiService';
import { withData } from '../hocHelpers';

import './ItemList.css';


const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        key={ id }
        onClick={ () => this.props.onItemSelected(id) }
        className="list-group-item"
      >{ label }</li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};


const { getAllPeople } = new SwapiService();


export default withData(ItemList, getAllPeople);
