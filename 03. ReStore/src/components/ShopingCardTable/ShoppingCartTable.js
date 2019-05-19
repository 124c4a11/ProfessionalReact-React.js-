import React from 'react';
import { connect } from 'react-redux';

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


const mapStateToProps = ({ cartItems, cartTotal }) => ({
  items: cartItems,
  total: cartTotal
});


const mapDispatchToProps = () => ({
  onIncrease: (id) => console.log(`Increase ${id}`),
  onDecrease: (id) => console.log(`Decrease ${id}`),
  onDelete: (id) => console.log(`Delete ${id}`)
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
