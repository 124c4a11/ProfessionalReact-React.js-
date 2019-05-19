import React from 'react';
import { Link } from 'react-router-dom';


export default ({ numberItems, total }) => {
  return (
    <header className="bg-light py-3 mb-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <Link to="/" className="navbar-brand text-dark ml-3">ReStore</Link>
          <Link to="/" className="text-dark mr-3">
            <span className="fa fa-shopping-cart mr-2 text-info"></span>
            { numberItems } items (${ total })
          </Link>
        </div>
      </div>
    </header>
  );
};
