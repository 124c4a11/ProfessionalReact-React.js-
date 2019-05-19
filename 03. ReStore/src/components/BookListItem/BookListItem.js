import React from 'react';

import './BookListItem.css';


export default ({ book }) => {
  const { title, author, price, imgUrl } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={ imgUrl } alt="cover" />
      </div>
      <div className="book-details">
        <h3 className="book-title"><a href="/">{ title }</a></h3>
        <div className="book-author">{ author }</div>
        <div className="book-price">${ price }</div>
        <button className="btn btn-info add-to-cart mt-2">Add to cart</button>
      </div>
    </div>
  );
};
