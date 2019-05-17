import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

import './ItemDetails.css';


const Record = ({ item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export { Record };


export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    loading: true,
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({
          loading: false,
          item,
          image: getImageUrl(item)
        })
      });
  };

  render() {
    const { loading, item, image } = this.state;

    if (loading) {
      return (
        <div className="item-details card">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="item-details card">
        <img className="item-image"
          src={ image }
          alt="item"
        />

        <div className="card-body">
          <h4>{ item.name }</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    );
  };
};
