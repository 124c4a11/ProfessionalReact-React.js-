import React from 'react';
import { connect } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../actions';

import './ShoppingCartTable.css';


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, ndx) => {
              const { id, title, count, total } = item;

              return (
                <tr key={ id }>
                  <td>{ ndx + 1 }</td>
                  <td>{ title }</td>
                  <td>{ count }</td>
                  <td>${ total }</td>
                  <td>
                    <button
                      onClick={ () => onDelete(id) }
                      className="btn btn-outline-danger btn-sm float-right"
                    >
                      <i className="fa fa-trash-o" />
                    </button>
                    <button
                      onClick={ () => onIncrease(id) }
                      className="btn btn-outline-success btn-sm float-right"
                    >
                      <i className="fa fa-plus-circle" />
                    </button>
                    <button
                      onClick={ () => onDecrease(id) }
                      className="btn btn-outline-warning btn-sm float-right"
                    >
                      <i className="fa fa-minus-circle" />
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <div className="total">
        Total: { total }
      </div>
    </div>
  );
};


const mapStateToProps = ({ shoppingCart: { cartItems, cartTotal } }) => ({
  items: cartItems,
  total: cartTotal
});


const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
